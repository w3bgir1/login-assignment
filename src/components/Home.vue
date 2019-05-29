<template>
  <div class="page d-flex align-items-center">
    <h2 class="mx-auto">Welcome, {{ username }}!</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    username() {
      return this.$store.getters.username;
    }
  }
};
</script>