<template>
  <div id="app" class="main">
    <Header/>
    <div class="mx-auto h-75 rounded shadow-sm bg-light w-75">
      <transition name="router-animation">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import firebase from "firebase";

export default {
  name: "app",
  components: {
    Header
  },
  beforeMount() {
    if (firebase.auth().currentUser) {
      this.$store.state.currentUser = firebase.auth().currentUser;
    }
  }
};
</script>

<style>
.main {
  height: 100vh;
  background-image: url("./assets/background.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

form {
  max-width: 20rem;
  padding: 1rem;
}

.page {
  position: fixed;
  width: inherit;
  height: 75%;
  overflow: auto;
}

.router-animation-enter-active {
  animation: moveInTop 1s;
  animation-delay: 0.5s;
  opacity: 0;
}
.router-animation-leave-active {
  animation: moveOutBottom 1s;
}

h2 {
  text-transform: uppercase;
  display: inline-block;
  background-image: linear-gradient(to right, #cac5ee, #ab9ff6);
  -webkit-background-clip: text;
  color: transparent;
}

@keyframes moveOutBottom {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-70vw);
    opacity: 0;
  }
}
@keyframes moveInTop {
  from {
    transform: translateY(70vw);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>