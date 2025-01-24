import {$authHost} from "@/api/index.js";

export const getCatalogGames = async () => {
  const games = await $authHost.get('api/games/')
  return games.data
}

export const getOneGame = async (id) => {
  const games = await $authHost.get('api/games/' + id + '/')
  return games.data
}
