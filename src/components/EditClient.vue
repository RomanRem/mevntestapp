<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Client</h3>
            <form @submit.prevent="handleUpdateForm" >
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="client.name" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="client.email" required>
                </div>

                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="client.phone" required>
                </div>

                <div class="form-group">
                    <label>Providers</label>
                    <input type="text" class="form-control" v-model="client.providers">
                </div>

                <div class="form-group">
                    <button class="btn btn-danger">Update</button>
                    <button type="submit" @click.prevent="deleteClient(client._id)" class="btn btn-danger">Delete</button>
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
                let indexOfArrayItem = this.Clients.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL, this.client).then(() => {
                        this.$router.push('/')
                        this.Clients.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
    }
}
</script>