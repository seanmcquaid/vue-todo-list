import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import EditTodo from '../views/EditTodo.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditTodo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
