<script>
import {getCatalogGames} from "@/api/games.js";
import router from "@/router/index.js";

export default {
  data(){
    return{
      catalogData: []
    }
  },
  computed:{
    router (){
      return router;
    }
  },
  mounted() {
    this.getCatalogGames();
  },
  methods:{
    async getCatalogGames() {
      try {
        this.catalogData = await getCatalogGames();
      } catch (e) {
        alert('Ошибка запроса в базу данных' + e)
      }
    }
  }

}
</script>

<template>
  <v-container class="w-75">
    <v-container>
      <span>Каталог</span>
    </v-container>
    <v-container class="d-flex flex-row flex-wrap">
      <v-card
        v-for="game in catalogData"
        :key="game"
        max-width="380"
        max-height="490"
        rounded
        class="w-33 pl-3"
        @click="router.push({name: 'GamePage', params:{id: game.id}})"
      >
        <v-img
          width="380"
          height="434"
          :src="game.image"
          cover
        >
          <v-chip>{{ game.rating }}<v-chip /></v-chip>
        </v-img>
        <v-card-title>{{ game.title }}</v-card-title>
      </v-card>
    </v-container>
  </v-container>
</template>

<style scoped>

</style>
