import Vue from 'vue';
import VueRouter from 'vue-router';
//import ClientsHome from '../components/ClientsHome';
import AddClient from '../components/AddClient';
import EditClient from '../components/EditClient';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    //component: ClientsHome,  06.11
    
    props: true,
  
    children:[
          {
           path: '/add',
           name: 'add.client',
           component: AddClient,
           props: true
          }]
  
        },
        {
          path: '/edit/:id',
          name: 'edit.client',
          component: EditClient,
          props: true
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
