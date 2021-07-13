<template>
  <div>
    <h1>Login</h1>
    <div class="Login">
      <form @submit.prevent="signIn">
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />

        <button type="submit">Login</button>
        <p>Not a user? <router-link to="/Signup">Signup</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
require("firebase/auth");
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async signIn() {
      try {
        const value = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);

        console.log(value);
        this.$router.replace({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.Login {
  padding: 10px;
  background: #333;
  border: none;
  border-radius: 10px;
}
input {
  padding: 10px;
  display: flex;
  border: none;
  border-radius: 10px;
  margin: 10px auto;
  letter-spacing: 1px;
  font-weight: bold;
}
button {
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  background: #42b983;
  border: none;
  border-radius: 5px;
  padding: 10px;
  transition: 0.5s;
  color: #01160d;
}
p, a{
  margin-bottom: 0px;
}
p{
  font-size: 15px;
  color: white;
}
a{
  text-decoration: none;
 color: #42b983;;
}
a:hover{
 color: #56f8af;
}
</style>
