import {ref} from 'vue'
import {defineStore} from 'pinia'
import {getTokenApi, registerApi,} from "@/api/user.js";
import {useUserStore} from "@/stores/UserStore.js";

export const useAuthStore = defineStore('auth', () =>{
  const accessToken = ref(localStorage.getItem('access')?.toString())
  const refreshToken = ref(localStorage.getItem('refresh')?.toString())
  const password = ref('');
  const username = ref('');
  const authError = ref('');
  const login = async () => {
    try{
      const result = await getTokenApi(username.value, password.value);
      accessToken.value = result.data.access;
      refreshToken.value = result.data.refresh;
      localStorage.setItem('access', result.data.access)
      localStorage.setItem('refresh', result.data.refresh)
      await useUserStore().getUser()
    } catch (e){
      authError.value = e.response.data || 'Произошла ошибка';
    }
  };

  const register = async () => {
    try {
      await registerApi(username.value, password.value);
    } catch (e) {
      authError.value = e.response || 'Произошла ошибка';
    }
  };

  const logout = () => {
    accessToken.value = null;
    refreshToken.value = null;
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    password.value = '';
    username.value = '';
    useUserStore().user = null
  }

  return {
    login,
    register,
    logout,
    username,
    password,
    authError,
    accessToken,
    refreshToken,
  };
})
