<template>
  <div class="common-container">
    <button @click="login()">login</button>
    <p v-show="!this.isAuthenticated">user is not logined</p>
    <p v-show="this.isAuthenticated">user is logined</p>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  data() {
    return {};
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["user/isAuthenticated"];
    },
  },
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const user = {
            uid: result.user.uid,
            name: result.user.displayName,
            image: result.user.photoURL,
            email: result.user.email,
          };
          this.$store.commit("user/setUser", user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>