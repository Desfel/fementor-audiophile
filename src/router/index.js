import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home'
import { isNil } from 'lodash'
import store from '@/store'
import Headphones from '@/views/Headphones'
import Speakers from "@/views/Speakers";
import Earphones from "@/views/Earphones";
import X99 from "@/views/X99";
import X991 from "@/views/X991";
import X59 from "@/views/X59";
import ZX9 from "@/views/ZX9";
import ZX7 from "@/views/ZX7";
import YX1 from "@/views/YX1";
import Checkout from "@/views/Checkout";

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/headphones',
      name: 'headphones',
      component: Headphones,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/xx99-mark-ii-headphones',
      name: 'product-page',
      component: X99,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/xx99-mark-i-headphones',
      name: 'product-page',
      component: X991,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/xx59-headphones',
      name: 'product-page',
      component: X59,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: Speakers,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/zx9-speaker',
      name: 'product-page',
      component: ZX9,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/zx7-speaker',
      name: 'product-page',
      component: ZX7,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/earphones',
      name: 'earphones',
      component: Earphones,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/yx1-earphones',
      name: 'product-page',
      component: YX1,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/checkout',
      name: 'product-page',
      component: Checkout,
      meta: {
        authNotRequired: true
      }
    },
    { path: '*', redirect: '/home' }
  ],
  scrollBehavior () {
    return { behavior: 'smooth', x: 0, y: 0 }
  }
})

/**
 * Handle user redirections
 */
// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  if (
    !(to.meta && to.meta.authNotRequired) &&
    isNil(store.state.authentication.user)
  ) {
    const path =
      store.state.authentication.user === null ? '/login' : '/check-login'
    return next(`${path}?redirectUrl=${to.path}`)
  }
  next()
})

export default router
