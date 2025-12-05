import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Day01View from '../views/days/Day01View.vue'
import Day04View from '../views/days/Day04View.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/day/1',
      name: 'day01',
      component: Day01View
    },
    {
      path: '/day/4',
      name: 'day04',
      component: Day04View
    }
  ]
})

export default router
