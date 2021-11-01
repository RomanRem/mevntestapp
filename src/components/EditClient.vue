<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Edit Client</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group row mb-3">
                    <label for="inputName" class="col-sm-2 col-form-label">Name:</label>
                    <div class="col-sm-10">
                    <input type="text" id="inputName" class="form-control" v-model="client.name" required>
                </div>
                </div>

                <div class="form-group row mb-3">
                    <label for="inputEmail" class="col-sm-2 col-form-label">Email:</label>
                    <div class="col-sm-10">
                    <input type="email" id="inputEmail" class="form-control" v-model="client.email" required>
                </div>
                </div>
                
                <div class="form-group row mb-3">
                    <label for="inputPhone" class="col-sm-2 col-form-label">Phone:</label>
                    <div class="col-sm-10">
                    <input type="text" id="inputPhone" class="form-control" v-model="client.phone" required>
                </div>
                </div>
                
                <div class="form-group row mb-3">
                    <label for="inputProviders" class="col-sm-2 col-form-label">Providers:</label>
                    <div class="col-sm-10">
                    <input type="text" id="inputProviders" class="form-control" v-model="client.providers">
                </div>
                </div>
                
                <div class="input-group mb-3">
                    <button type="click" @click.prevent="deleteClient(client._id)"
                     class="btn btn-danger ">Delete</button>
                    <button type="submit" class="btn btn-outline-info">Save Client</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            client: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-client/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.client = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-client/${this.$route.params.id}`;

            axios.post(apiURL, this.client).then((res) => {
                console.log(res)
                this.$router.push('/')
            }).catch(error => {
                console.log(error)
            });
        },
        deleteClient(id){
                let apiURL = `http://localhost:4000/api/delete-client/${id}`;
                //let indexOfArrayItem = this.Clients.findIndex(i => i._id === id); //работало в родителе

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.$router.push('/')                             // в родителе не требовалось
                        this.Clients.splice(this.CLients.indexOf(id), 1); // работало в родителе(indexOfArrayItem, 1)
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
    }
}
</script>