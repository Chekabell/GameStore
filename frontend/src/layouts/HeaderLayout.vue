<script>
import router from "@/router/index.js";
import {getUserApi} from "@/api/user.js";
import {useAuthStore} from "@/stores/AuthStore.js";

export default {
  data(){
    return{
      user: null,
    }
  },
  computed:{
    router(){
      return router
    }
  },
  beforeMount() {
    if(useAuthStore().accessToken !== null){
      this.getUser()
    }
  },
  updated() {
    if(useAuthStore().accessToken !== null){
      this.getUser()
    }
  },
  methods:{
    async getUser(){
        this.user = await getUserApi()
    },
    async logout(){
      this.user = null
      await useAuthStore().logout()
      await router.push({name: 'login'})
    }
  }
}

</script>

<template>
  <v-toolbar density="comfortable">
    <v-row
      no-gutters
    >
      <v-col>
        <v-btn
          variant="text"
          class="fill-height font-weight-bold text-h4"
          @click="router.push({name: 'catalog'})"
        >
          GameStore
        </v-btn>
      </v-col>
      <v-col v-if="user != null">
        <v-text-field
          density="compact"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
        />
      </v-col>
      <v-col>
        <v-img
          v-if="user==null"
          max-width="34"
          max-height="34"
          src="../assets/login-icon.png"
        />
        <v-row
          v-else
          no-gutters
        >
          <v-col>
            <v-img
              max-width="52"
              max-height="34"
              src="../assets/shoppingcart.png"
              @click="router.push({name:'shopcart',params:{id: user.id}})"
            />
          </v-col>
          <v-col>
            <v-img
              max-width="34"
              max-height="34"
              src="../assets/wishlist.png"
              @click="router.push({name:'wishlist',params:{id: user.id}})"
            />
          </v-col>
          <v-col>
            <v-img
              max-width="34"
              max-height="34"
              src="../assets/logout.png"
              @click="logout()"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-toolbar>
  <router-view />
</template>

<style scoped>
</style>
