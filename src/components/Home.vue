<template>
  <div class="hello">
    <div>
      <button @click="signOut">Log out</button>
    </div>
    <h1>main component</h1>
  </div>
</template>

<script>
import firebase from "firebase/app";
require("firebase/auth");
export default {
  name: "Home",
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);

        this.$router.replace({name: "Login"})
      } catch (error) {

        console.log(error)
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin: 10px;
  letter-spacing: 1px;
  font-weight: bold;
}
</style>
