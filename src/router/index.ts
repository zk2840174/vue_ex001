// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/page2',
    component: () => import('@/views/ListPage.vue'),
  },

  {
    path: '/todo/list',
    name: 'TodoListPage',
    component: () => import('@/views/todo/TodoListPage.vue'),
  },

  {
    path: '/todo/register',
    name: 'TodoRegisterPage',
    component: () => import('@/views/todo/TodoRegisterPage.vue'),
  },
  {
    path: '/todo/:id',
    name: 'TodoReadPage',
    component: () => import('@/views/todo/TodoReadPage.vue'),
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
