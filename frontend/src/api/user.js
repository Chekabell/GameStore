import {$authHost, $host} from "@/api/index.js";
import {useAuthStore} from "@/stores/AuthStore.js";

export const registerApi = async (username, password) => {
  const {user} = await $host.post('auth/users/',{
    username, password
  })
  return (user)
}

export const getTokenApi = async (username, password) => {
  const {data} = await $host.post('auth/jwt/create/',{
    username, password
  })
  return {data}
}

export const getUserApi = async () =>{
  const {data} = await $host.get('auth/users/me/',{
    headers:{
      'Authorization': 'JWT ' + useAuthStore().accessToken
    }
  })
  return data
}

export const getNewToken = async (refresh) => {
  const {data} = await $host.post('auth/jwt/refresh/', {
    refresh
  })
  return {data}
}

export let getShoppingCart = async (id) => {
  const shoppingCart = await $authHost.get('api/shoppingcarts/' + id + '/')
  return shoppingCart.data
}

export const getWishlist = async (id) => {
  const wishlist = await $authHost.get('api/wishlists/' + id + '/')
  return wishlist.data
}
