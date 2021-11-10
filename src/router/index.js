import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/todo'
    },
    {
      path: '/todo',
      component: () => import('../views/todo.vue')
    },
    {
      path: '/newtodo',
      component: () => import('../views/newtodo.vue')
    }
  ]
})