<template>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content />
    <meta name="author" content />
    <title>SB Admin - Register</title>
  </head>
  <body>
    <b-row class="justify-content-center">
      <b-col cols="12" md="8" lg="6">
        <b-jumbotron>
          <div class="container">
            <div class="justify">
              <div v-if="errors && errors.length">
                <div v-for="(error, i) of errors" :key="i">
                  <b-alert show variant="danger" dismissible>{{error}}</b-alert>
                </div>
              </div>
            </div>
            <div class="card card-register mx-auto mt-5">
              <div class="card-header">
                <p class="mt-2">Register an account</p>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <div class="form-row">
                      <div class="col-md-6">
                        <div class="form-label-group">
                          <input
                            type="text"
                            id="firstName"
                            class="form-control"
                            v-model="first_name"
                            placeholder="First name"
                            required="required"
                            autofocus="autofocus"
                          />
                          <label for="firstName"></label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-label-group">
                          <input
                            type="text"
                            id="lastName"
                            class="form-control"
                            v-model="last_name"
                            placeholder="Last name"
                            required="required"
                          />
                          <label for="lastName"></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-label-group">
                      <input
                        type="email"
                        id="inputEmail"
                        class="form-control"
                        v-model="email"
                        placeholder="Email address"
                        required="required"
                      />
                      <label for="inputEmail"></label>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-label-group">
                      <input
                        type="text"
                        id="inputUser"
                        class="form-control"
                        v-model="username"
                        placeholder="username"
                        required="required"
                      />
                      <label for="inputUser"></label>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-row">
                      <div class="col-md-6">
                        <div class="form-label-group">
                          <input
                            type="password"
                            id="inputPassword"
                            class="form-control"
                            v-model="password"
                            placeholder="Password"
                            required="required"
                          />
                          <label for="inputPassword"></label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-label-group">
                          <input
                            type="password"
                            id="confirmPassword"
                            class="form-control"
                            v-model="password2"
                            placeholder="Confirm password"
                            required="required"
                          />
                          <label for="confirmPassword"></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="mt-2">
                    <a class="btn btn-success btn-block" @click="addRegister">Register</a>
                  </p>
                </form>
                <div class="text-center">
                  <p class="mt-2">
                    <a href="/login">Login</a>
                  </p>
                  <p class="mt-2">
                    <a href="#/register">Forgot password?</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </b-jumbotron>
      </b-col>
    </b-row>
  </body>
</html>
</template>

<script>
/* eslint-disable */
import PostsService from "@/services/PostsService";
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password2: "",
      username: "",
      errors: []
    };
  },
  methods: {
    async addRegister() {
      let first_name = this.first_name;
      let last_name = this.last_name;
      let email = this.email;
      let password = this.password;
      let password2 = this.password2;
      if (first_name.length == 0) {
        this.errors.push("error first name cannot be empty");
      } else if (last_name.length == 0) {
        this.errors.push("error last name cannot be empty");
      } else if (email.length == 0) {
        this.errors.push("error email cannot be empty");
      } else if (password.length < 8) {
        this.errors.push(
          "password length is weak, minimum of 8 characters required"
        );
      } else if (password !== password2) {
        this.errors.push("password confirmation must match");
      } else {
        await PostsService.addRegister({
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          username: this.username
        }).then(response => {
          const errors = response.data.error;
          if (errors) {
            this.errors.push(errors);
          } else
            this.$router.push({
              name: "Login"
            });
        });
      }
    }
  }
};
</script>
<style scoped>
.justify {
  text-align: center;
}
</style>