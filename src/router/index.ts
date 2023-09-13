import { createRouter, createWebHistory } from 'vue-router'
import { useCounterStore } from '@/stores/counter'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/screen'
    },
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/screen',
      component: () => import('@/views/BigScreen/index.vue')
    }
  ]
})

// router.beforeEach((to, from) => {
//   const store=useCounterStore()
//   if (to.path == '/login') {
//     return true
//   } else {
//     if (store.token) {
//       return true
//     } else {
//       return '/login'
//     }
//   }
// })

export default router
