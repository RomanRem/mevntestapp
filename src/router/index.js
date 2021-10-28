import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
// Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;