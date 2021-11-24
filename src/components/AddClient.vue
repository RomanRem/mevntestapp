<template>
  <div>
    <button type="button" class="btn btn-success" @click="toggleModal">
      Create Client
    </button>
    <div
      ref="modal"
      class="modal fade"
      :class="{ show, 'd-block': active }"
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
              <div class="col-md-8">
                <form name="addClient">
                  <div class="form-group row mb-3">
                    <label for="inputName" class="col-sm-2 col-form-label"
                      >Name:</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        id="inputName"
                        class="form-control"
                        v-model="client.name"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group row mb-3">
                    <label for="inputEmail" class="col-sm-2 col-form-label"
                      >Email:</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="email"
                        id="inputEmail"
                        class="form-control"
                        v-model="client.email"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group row mb-3">
                    <label for="inputPhone" class="col-sm-2 col-form-label"
                      >Phone:</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        id="inputPhone"
                        class="form-control"
                        v-model="client.phone"
                        required
                      />
                    </div>
                  </div>

                  <div class="input-append row mb-3">
                    <label for="inputProviders" class="col-sm-2 col-form-label"
                      >Providers:</label
                    >

                    <div class="col-sm-7">
                      <input
                        type="text"
                        id="inputProviders"
                        class="form-control"
                        v-model="client.providers"
                        required
                      />
                    </div>
                    <button class="btn btn-primary mb-2">Add Provider</button>
                    <div style="margin-left: 6.438rem">
                      <div class="card" style="width: 17.6rem">
                        <div class="card-body">
                          <form
                            class="form-group col-sm-13 input-append row mb-3"
                          >
                            <div class="form-check" style="margin-left: 10px">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck1"
                              />
                              <label
                                class="form-check-label"
                                for="defaultCheck1"
                              >
                                Provider 1
                              </label>
                              <button
                                class="btn btn-sucess btn-sm"
                                style="margin-left: 90px"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-check2-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"
                                  />
                                  <path
                                    d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                                  />
                                </svg>
                              </button>
                              <button class="btn btn-sucess btn-sm">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-trash-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                                  />
                                </svg>
                              </button>
                            </div>

                            <div class="form-check" style="margin-left: 10px">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck1"
                              />
                              <label
                                class="form-check-label"
                                for="defaultCheck1"
                              >
                                Provider 2
                              </label>
                              <button
                                class="btn btn-sucess btn-sm"
                                style="margin-left: 90px"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-check2-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"
                                  />
                                  <path
                                    d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                                  />
                                </svg>
                              </button>
                              <button class="btn btn-sucess btn-sm">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-trash-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div class="form-check" style="margin-left: 10px">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck1"
                              />
                              <label
                                class="form-check-label"
                                for="defaultCheck1"
                              >
                                Provider 3
                              </label>
                              <button
                                class="btn btn-sucess btn-sm"
                                style="margin-left: 90px"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-check2-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"
                                  />
                                  <path
                                    d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                                  />
                                </svg>
                              </button>
                              <button class="btn btn-sucess btn-sm">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-trash-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div class="form-check" style="margin-left: 10px">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck1"
                              />
                              <label
                                class="form-check-label"
                                for="defaultCheck1"
                              >
                                Provider 4
                              </label>
                              <button
                                class="btn btn-sucess btn-sm"
                                style="margin-left: 90px"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-check2-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"
                                  />
                                  <path
                                    d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                                  />
                                </svg>
                              </button>
                              <button class="btn btn-sucess btn-sm">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-trash-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div class="form-check" style="margin-left: 10px">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck1"
                              />
                              <label
                                class="form-check-label"
                                for="defaultCheck1"
                              >
                                Provider 5
                              </label>
                              <button
                                class="btn btn-sucess btn-sm"
                                style="margin-left: 90px"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-check2-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"
                                  />
                                  <path
                                    d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                                  />
                                </svg>
                              </button>
                              <button class="btn btn-sucess btn-sm">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-trash-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                                  />
                                </svg>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group modal-footer">
                    <button
                      class="btn btn-outline-secondary btn-sm"
                      type="button"
                      data-dismiss="modal"
                      aria-label="Close"
                      @click="toggleModal"
                    >
                      Chancel
                    </button>
                    <button
                      @click.prevent="handleSubmitForm"
                      class="btn btn-outline-primary btn-sm"
                    >
                      Add Client
                    </button>
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
  name: "add",

  data() {
    return {
      active: false,
      show: false,
      client: {
        name: "",
        email: "",
        phone: "",
        providers: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-client";

      axios
        .post(apiURL, this.client)
        .then(() => {
          this.$router.push("/");
          this.client = {
            name: "",
            email: "",
            phone: "",
            providers: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
    toggleModal() {
      const body = document.querySelector("body");
      this.active = !this.active;
      this.active
        ? body.classList.add("modal-open")
        : body.classList.remove("modal-open");
      setTimeout(() => (this.show = !this.show), 10);
    },
  },
};
</script>
