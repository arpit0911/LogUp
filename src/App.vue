<template>
  <div id="app">
    <div v-if="!loggedIn" id="nav">
      <router-link to="/">Login</router-link> 
      <router-link to="/Signup">Signup</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
require("firebase/auth");
export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  font-size: 20px;
  margin: 5px;
  text-decoration: none;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  background: #42b983;
  border: none;
  border-radius: 5px;
  padding: 10px;
  transition: .5s;
  color: #01160d;
}

</style>
