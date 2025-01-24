import {createRouter, createWebHistory} from 'vue-router'
import {useAuthStore} from "@/stores/AuthStore.js";
import HeaderLayout from "@/layouts/HeaderLayout.vue";
import LoginPage from "@/pages/LoginPage.vue";
import CatalogPage from "@/pages/CatalogPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import GamePage from "@/pages/GamePage.vue";
import ShoppingCartPage from "@/pages/ShoppingCartPage.vue";
import WishListPage from "@/pages/WishListPage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'head',
      component: HeaderLayout,
      children: [
        {
          path: '',
          name: 'login',
          component: LoginPage,
          meta: {requiresAuth: false},
        },
        {
          path: 'catalog',
          name: 'catalog',
          component: CatalogPage,
          meta: {requiresAuth: true},
        },
        {
          path: 'reg',
          name: 'register',
          component: RegisterPage,
          meta: {requiresAuth: false},
        },
        {
          path: 'game/:id',
          name: 'GamePage',
          component: GamePage,
          meta: {requiresAuth: true},
        },
        {
          path: 'shoppingcart/:id',
          name: 'shopcart',
          component: ShoppingCartPage,
          meta: {requiresAuth: true},
        },
        {
          path: 'wishlist/:id',
          name: 'wishlist',
          component: WishListPage,
          meta: {requiresAuth: true},
        }
      ]
    }
  ]
})

export default router

router.beforeEach((to) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.accessToken) {
    return {
      path: "/",
      query: {redirect: to.fullPath},
    }
  }
})
