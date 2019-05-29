<template>
  <div class="page">
    <form @submit.prevent="login" class="mx-auto mt-5">
      <h2 class="mt-3 mb-5">Login</h2>
      <input class="form-control" type="email" placeholder="Email" v-model="email" required>
      <br>
      <input
        class="form-control"
        type="password"
        placeholder="Password"
        v-model="password"
        required
      >
      <br>
      <button class="btn btn-primary mb-2">Login</button>
    </form>
    <div v-if="errorMessage" class="alert alert-danger" role="alert">{{ errorMessage }}</div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SigIn",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$store.commit("setCurrentUser", user.user);
          this.$router.replace("/home");
        })
        .catch(err => {
          this.errorMessage = err.message;
        });
    }
  }
};
</script>
