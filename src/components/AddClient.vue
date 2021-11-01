<template>
  <div>
    <button type="button" class="btn btn-success" @click="toggleModal">Create Client</button>
    <div
      ref="modal"
      class="modal fade"
      :class="{show, 'd-block': active}"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Client</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="toggleModal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="justify-content-center row">
          <div class="col-md-12">
            <h3 class="text-center">Create Client</h3>
            <form @submit.prevent="handleSubmitForm">
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
                    <label>Provider</label>
                    <input type="text" class="form-control" v-model="client.providers" required>
                </div>

                <div class="form-group modal-footer">
                    <button type="submit" class="btn btn-outline-primary" >Add Client</button>
                    <button  class="btn btn-outline-secondary"
                     type="button"             
                     data-dismiss="modal"
                     aria-label="Close"
                     @click="toggleModal">Chancel</button>
                </div>
            </form>
        </div>
    </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="active" class="modal-backdrop fade show"></div>
  </div>
</template>

<script>
    import axios from "axios";

    export default {

        data() {
            return {
                active: false,
                show: false,
                client: {
                   name: '',
                   email: '',
                   phone: '',
                   providers:''
                }
            }
        },
        methods: {
        handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-client';
                
                axios.post(apiURL, this.client).then(() => {
                  this.$router.push('/')
                  this.client = {
                    name: '',
                    email: '',
                    phone: '',
                    providers:''
                  }
                }).catch(error => {
                    console.log(error)
                });
            
          },
            toggleModal() {
            const body = document.querySelector("body");
            this.active = !this.active;
            this.active
              ? body.classList.add("modal-open")
              : body.classList.remove("modal-open");
            setTimeout(() => (this.show = !this.show), 10);
          }
            
        }
        }
    
</script>