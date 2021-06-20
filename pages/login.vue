<template>
  <div class="common-container">
    <button @click="login()">login</button>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      console.log("login action");
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          const user = result.user;
          console.log("success : " + user);
        })
        .catch(function (error) {
          var errorCode = error.code;
          console.log("error : " + errorCode);
        });
    },
  },
};
</script>

<style>
</style>