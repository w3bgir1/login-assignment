<template>
  <div class="page">
    <form @submit.prevent="registerUser" class="mx-auto my-5">
      <h2 class="mt-3 mb-5">New user? Sign Up!</h2>
      <input
        class="form-control"
        type="text"
        placeholder="Username"
        v-model="userData.username"
        minlength="5"
        required
      >
      <br>
      <input
        class="form-control"
        type="email"
        placeholder="Email"
        v-model="userData.email"
        required
      >
      <br>
      <input
        class="form-control"
        type="password"
        placeholder="Choose a password"
        v-model="userData.password"
        minlength="6"
        required
      >
      <br>
      <input
        class="form-control"
        v-on:change="btnStatus"
        type="password"
        placeholder="Confirm a password"
        v-model="userData.confirmPassword"
        minlength="6"
        required
      >
      <br>
      <button class="btn btn-primary mb-2" v-bind:disabled="btnDisabled">Create account</button>
    </form>
    <div v-if="errorMessage" class="alert alert-danger w-50 mx-auto" role="alert">{{ errorMessage }}</div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SignUp",
  data() {
    return {
      userData: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      errorMessage: "",
      btnDisabled: true
    };
  },

  methods: {
    registerUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.userData.email,
          this.userData.password
        )
        .then(() => {
          Promise.resolve(
            firebase.auth().currentUser.updateProfile({
              displayName: this.userData.username
            })
          ).then(() => {
            this.$store.commit("setCurrentUser", firebase.auth().currentUser);
            this.$router.push("home");
          });
        })
        .catch(err => {
          this.errorMessage = err.message;
        });
    },
    btnStatus() {
      if (this.userData.confirmPassword === this.userData.password) {
        this.btnDisabled = false;
        this.errorMessage = "";
      } else {
        this.errorMessage = "Password doesn't match";
      }
    }
  }
};
</script>        