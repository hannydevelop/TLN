/* eslint-disable 
<template>
  <b-row class="justify-content-center">
    <b-col cols="12" md="8" lg="6">
      <b-jumbotron>
        <h2 class="mt-0 mt-sm-3 mb-2">Login</h2>
        <div v-if="errors && errors.length">
          <div v-for="(error, i) of errors" :key="i">
            <b-alert show variant="danger" dismissible>{{error}}</b-alert>
          </div>
        </div>
        <form @submit.prevent="login" class="login">
          <input
            v-model="email"
            type="email"
            name="username"
            class="login-input"
            placeholder="email"
          />
          <input
            v-model="password"
            type="password"
            name="password"
            class="login-input"
            placeholder="Password"
          />
          <b-button type="submit" variant="success" class="login-button">Login</b-button>
          <p class="mt-3">
            First time here?
            <router-link to="/register">Create an account</router-link>
          </p>
          <p class="mt-2">
            <a href="/passwordReset">Forgot password?</a>
          </p>
        </form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import axios from "axios";
import validations from "@/utils/validations";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      ...validations
    };
  },
  methods: {
    login() {
      this.$store.dispatch("retrieveUser", {
        email: this.email,
        password: this.password
      });
      this.$store.dispatch("retrieveId", {
        email: this.email,
        password: this.password
      });
      this.$store
        .dispatch("retrieveToken", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          const errors = response.data.error;
          const token = response.data.token;
          if (errors) {
            this.errors.push(errors);
          } else
            this.$router.push({
              name: "Home"
            });
        });
    },
    register() {
      this.$router.push({
        name: "Register"
      });
    }
  }
};
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 3px;
}

a{
    color:black;
}

.login-input {
  padding: 20px;
  border-radius: 3px;
  border: 2px solid #e9ecef;
  margin-bottom: 20px;
}

.login-button {
  padding: 15px;
  margin-bottom: 20px;
  cursor: pointer;
}

.register-button {
  padding: 15px;
  color: #2c3e50;
  background-color: #e9ecef;
  border-color: #e9ecef;
  cursor: pointer;
}

.register-button:hover {
  background-color: #c5d0da;
  border-color: #c5d0da;
  color: #2c3e50;
}

.btn-success:focus,
.btn-success:active,
.btn-success.focus {
  box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.2);
}

.btn-success:not([disabled]):not(.disabled):active,
.btn-success:not([disabled]):not(.disabled).active {
  background-color: #c5d0da;
  border-color: #c5d0da;
  color: #2c3e50;
  box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.2);
}
</style>
*/