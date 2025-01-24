<script>

import router from "@/router/index.js";
import {getOneGame} from "@/api/games.js";
import {getShoppingCart, getUserApi, getWishlist} from "@/api/user.js";
import {useUserStore} from "@/stores/UserStore.js";

export default {
  data(){
    return{
      user: {},
      game: {},
      inCart: false,
      inWishlist: false,
      idGame: router.currentRoute._value.params.id,
    }
  },
  beforeMount(){
    this.getUser()
    this.getThisGame()
    this.getShoppingCart()
    this.getWishlist()
  },
  methods: {
    async getUser(){
      this.user = await getUserApi()
    },
    async getThisGame(){
      try {
        this.game = await getOneGame(this.idGame)
      } catch (e){
        console.log(e)
      }
    },
    async getShoppingCart(){
      try {
        const shoppingCart = await getShoppingCart(user.id);
        if(shoppingCart.length !== 0) {
          shoppingCart[0].game_id.forEach((el) => {
            if (el.id == this.idGame) {
              this.inCart = true
            }
          })
        }
      } catch (e){
        console.log(e)
      }
    },
    async getWishlist() {
      const wishlist = await getWishlist(user.id)
      if (wishlist.length !== 0) {
        wishlist[0].game_id.forEach((el) => {
          if (el.id == this.idGame) {
            this.inWishlist = true
          }
        })
      }
    }
  }
  }
</script>

<template>
  <v-container class="w-75">
    <v-row>
      {{ game.title }}
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-img
          class="pb-3"
          :src="game.image"
        />
        <v-row class="w-100 flex-nowrap">
          <v-col cols="4">
            {{ game.cost + 'Р' }}
          </v-col>
          <v-col cols="6">
            <v-btn
              v-if="inCart"
              block
              variant="outlined"
              disabled
            >
              В корзине
            </v-btn>
            <v-btn
              v-else
              block
              color="secondary"
            >
              В корзину
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mx-1">
          <v-btn
            v-if="inWishlist"
            block
            variant="outlined"
            color="secondary"
          >
            В список желаемого
          </v-btn>
          <v-btn
            v-else
            block
            variant="outlined"
            color="secondary"
          >
            В списке желаемого
          </v-btn>
        </v-row>
      </v-col>
      <v-col cols="16">
        <v-row>
          <v-chip-group>
            <v-chip>{{ game.rating }}</v-chip>
            <v-chip
              v-for="(tag) in game.tags"
              :key="tag"
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-row>
        <v-row
          no-gutters
          class="pt-4"
        >
          <v-col>
            <v-row no-gutters>
              <v-col cols="4">
                Жанр
              </v-col>
              <v-col
                v-for="genre in game.genres"
                :key="genre"
                cols="2"
                size="small"
                :value="genre"
                variant="text"
              >
                {{ genre }}
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="4">
                Язык
              </v-col>
              <v-col
                v-for="language in game.languages"
                :key="language"
                cols="2"
                :value="language"
                variant="text"
              >
                {{ language }}
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="4">
                Дата выхода
              </v-col><v-col cols="5">
                {{ game.date_release }}
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="4">
                Издатель
              </v-col><v-col cols="5">
                {{ game.publisher }}
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="4">
                Разработчик
              </v-col><v-col cols="5">
                {{ game.developer }}
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="4">
                Особенности
              </v-col><v-col cols="5">
                {{ game.features }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <p>{{ game.description }}</p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>
