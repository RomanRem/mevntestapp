<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">Clients</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <add-client :showModal="showModalNow" @closeModal="closeMyModal" :addCl='addCl'/>
          </li>
        </ul>
      </div>
    </nav>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Providers</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="client in Clients" :key="client._id">
                        <td>{{ client.name }}</td>
                        <td>{{ client.email }}</td>
                        <td>{{ client.phone }}</td>
                        <td>{{ client.providers }}</td>
                        <td>
                          <edit-client :showModal="showModalNow" @closeModal="closeMyModal"/>
                          
                        
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
           
    </div>
    </div>
    </div>
</template>

<script>
import addClient from "./components/AddClient";
import editClient from './components/EditClient'; 
import axios from "axios";
export default {
name: 'home',
  components: {
    "add-client" : addClient,
    'edit-client': editClient,
  },
  props:{
    type: Object
  },

  data() {
    return {
      showModalNow: false,
      Clients: []
    }
  },
  created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Clients = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
  methods: {
    closeMyModal() {
      this.showModalNow = false;
    },
    toggleModal() {
      this.showModalNow = !this.showModalNow;
    },
    addCl(){}
  }
};
</script>