<template>
  <header>
    <div>
      <!-- <nuxt-link to="/login">home</nuxt-link> -->
      <a href="http://localhost:3000/login">home</a>
      <a class="add-request">add request</a>
      <a class="sign-out">sign out</a>
      <nuxt-link to="/coffee">coffee</nuxt-link>
      <nuxt-link to="/alcohol">alcohol</nuxt-link>
      <nuxt-link v-if="isAuthenticated" :to="`/users/${userId}`"
        >my page</nuxt-link
      >
    </div>
  </header>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters["user/isAuthenticated"];
    },
    userId() {
      return this.$store.state.user.user.uid;
    },
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          //ここでゲストログインをユーザは痕跡を全て消す。
          this.$store.commit("user/setUser", null);
          window.alert("ログアウトに成功しました");
        })
        .catch((e) => {
          window.alert("ログアウトに失敗しました");
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
</style>