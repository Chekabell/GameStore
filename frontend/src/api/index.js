import axios from "axios";
import {useAuthStore} from "@/stores/AuthStore.js";
import {getNewToken} from "@/api/user.js";
import router from '../router';
import {useUserStore} from "@/stores/UserStore.js";

const $host = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

const $authHost = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `JWT ${localStorage.getItem('access')}`
    return config;
}

$authHost.interceptors.request.use(authInterceptor)

$authHost.interceptors.response.use((response) =>{
    return response
}, async function (error){
    const authStore = useAuthStore()
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry &&
    localStorage.getItem('refresh')){
        originalRequest._retry = true;
        try {
            const newToken = await getNewToken(localStorage.getItem('refresh'));
            console.log('newToken', newToken.data);
            authStore.accessToken = newToken.data.access;
            localStorage.setItem('access',newToken.data.access)
            await useUserStore().getUser()
        } catch (err){
            console.log(err);
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            await router.push('/login');
            authStore.accessToken = '';
            authStore.refreshToken = '';
        }
    }
    console.log(error.response.data);
})

export {
    $host,
    $authHost
}


