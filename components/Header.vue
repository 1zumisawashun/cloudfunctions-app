<template>
  <header>
    <div class="logo">
      <img src="@/assets/images/logo_transparent.png" alt="" class="image" />
    </div>
    <div class="link">
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
header {
  width: 100%;
  height: 70px;
  padding: 20px;
  background: white;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
}
header a {
  margin-left: 10px;
  border-bottom: 2px solid #ffe100;
  padding: 4px;
  cursor: pointer;
}
header a:hover {
  background: #ffe100;
  color: black;
}
.link {
  width: 40%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}
.logo {
  width: 20%;
}
.image {
  width: 130px;
  height: 35px;
  object-fit: cover;
}
</style>