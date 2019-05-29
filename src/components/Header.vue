<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5 justify-content-end">
    <template v-if="isAuth">
      <button class="btn btn-primary" @click.prevent.stop="logout">Logout</button>
    </template>
    <template v-else>
      <router-link v-if="'signup'.includes($route.name)" to="/signin" class="btn btn-primary">SignIn</router-link>
      <template v-if="'signin'.includes($route.name)">
        <span class="mr-3">Don't have an account?</span>
        <router-link to="/signup" class="btn btn-primary">SignUp</router-link>
      </template>
    </template>
  </nav>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Header",
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit("clearData");
          this.$router.push("signin");
        });
    }
  }
};
</script>