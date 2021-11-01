import Vue from 'vue';
import VueRouter from 'vue-router';
import ClientsHome from '../components/ClientsHome';
//import EmptyModal from '../components/EmptyModal';
import AddClient from '../components/AddClient';
import EditClient from '../components/EditClient';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: ClientsHome,
  
    children:[
          {
           path: '/addclient',
           name: 'add.client',
           component: AddClient
          }]
  
        },
        {
          path: '/editclient/:id',
          name: 'edit.client',
          component: EditClient
         }   
];
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
