<template>
  <div>
    <h1>Signup</h1>
    <div class="Signup">
      <form @submit.prevent="handleSubmit">
        <!-- <input type="name" v-model="name" placeholder="Name" /> -->

        <input type="email" v-model="email" placeholder="Email" />

        <input type="password" v-model="password" placeholder="Password" />

        <!-- <input
          type="password"
          v-model="confirm_password"
          placeholder="Confirm Password"
        /> -->

        <button type="submit">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
require("firebase/auth");
export default {
  name: "Signup",
  data() {
    return {
      // name: "",
      email: "",
      password: "",
      //     confirm_password: "",
    };
  },

  methods: {
    async handleSubmit() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword( this.email, this.password);
        console.log("user", user);

        this.$router.replace({ name: "Home" });
      } catch (error) {
        console.log(error);
      }

      // console.log("name", this.name);
      // console.log("name", this.email);
      // console.log("name", this.password);
      // console.log("name", this.confirm_password);
    },
  },
};
</script>

<style scoped>
.Signup {
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
button:hover{
  background: #42b983;
  border: none;
  border-radius: 5px;
  padding: 10px;
  transition: .5s;
  color: #01160d;
}
</style>
