import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCyZivngLq3Sj1I3AJ6tNwPF4jLIiC9Ec8",
  authDomain: "logup-1dcea.firebaseapp.com",
  projectId: "logup-1dcea",
  storageBucket: "logup-1dcea.appspot.com",
  messagingSenderId: "921936664628",
  appId: "1:921936664628:web:5a1b2a4d1f035c78b6d261"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
