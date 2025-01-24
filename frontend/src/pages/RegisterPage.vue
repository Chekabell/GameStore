<script>
import {useAuthStore} from "@/stores/AuthStore.js";
import router from "@/router/index.js";
export default {
  computed:{
    authStore(){
      return useAuthStore()
    },
  },
  methods:{
    async register(){
      await this.authStore.register()
      if(!this.authStore.authError){
        console.log('no error register')
        await this.authStore.login()
        await router.push({name: 'catalog'})
      } else{
        console.log('error register', this.authStore.authError)
      }
    }
  }
}
</script>

<template>
  <v-container
    class="fill-height d-flex flex-column justify-center"
  >
    <span class="font-weight-bold text-h4">Регистрация</span>
    <v-sheet
      class="d-flex flex-column justify-center w-50 rounded-xl mt-5 pt-5 pb-5 border-sm border-accent"
      border
    >
      <v-form
        class="mt-2 d-flex flex-column align-center"
        @submit.prevent="register()"
      >
        <v-container class="d-flex flex-column align-center pa-0 w-100">
          <v-container class="text-left pa-0 w-75">
            Логин
          </v-container>
          <v-text-field
            v-model="authStore.username"
            class="pt-2 w-75"
            type="text"
            variant="outlined"
            label="Введите логин"
          />
        </v-container>
        <v-container class="d-flex flex-column align-center pa-0 w-100">
          <v-container class="text-left pa-0 w-75">
            Пароль
          </v-container>
          <v-text-field
            v-model="authStore.password"
            class="pt-2 w-75"
            type="password"
            variant="outlined"
            label="Введите пароль"
          />
        </v-container>
        <v-btn
          class="w-25"
          color="secondary"
          type="submit"
        >
          Войти
        </v-btn>
      </v-form>
      <v-container class="text-center">
        <span>
          Уже есть аккаунт?
        </span>
        <RouterLink :to="{name: 'login'}">
          Войти
        </RouterLink>
      </v-container>
    </v-sheet>
  </v-container>
</template>

<style scoped>

</style>
