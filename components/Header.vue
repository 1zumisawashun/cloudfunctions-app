<template>
  <div class="header-container">
    <div class="wrapper">
      <nuxt-link class="logo" to="/">
        <img src="@/assets/images/logo_transparent.png" alt="" class="image" />
      </nuxt-link>
      <div class="link">
        <nuxt-link class="item" to="/coffee">COFFEE</nuxt-link>
        <nuxt-link class="item" to="/alcohol">ALCOHOL</nuxt-link>
        <nuxt-link class="item" to="/search">SEARCH</nuxt-link>
        <nuxt-link class="item" to="/login" v-show="!isAuthenticated"
          >LOGIN</nuxt-link
        >
        <a class="item" @click="logout()" v-show="isAuthenticated"> LOGOUT </a>
        <nuxt-link class="item" to="/post" v-show="isAuthenticated"
          >POST</nuxt-link
        >
        <nuxt-link class="item" v-if="isAuthenticated" :to="`/users/${userId}`"
          >USER</nuxt-link
        >
        <button @click="sayHello">say hello</button>
        <!-- v-showだとエラーになる -->
      </div>
    </div>
  </div>
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
    sayHello() {
      const sayHello = firebase.functions().httpsCallable("sayHello");
      sayHello({ name: `shun` }).then((result) => {
        //resultの中にcloud functionsのretrunの返り値が入る
        console.log(result.data);
      });
    },
  },
};
</script>

<style scoped>
.header-container {
  background-color: #f1f1f1;
}
.logo {
  width: 20%;
  margin: auto 0;
}
.image {
  width: 100%;
  height: 100px;
  object-fit: cover;
}
.wrapper {
  width: 70%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.link {
  width: 50%;
  display: flex;
  margin: auto 0;
  justify-content: space-between;
}
.item {
  color: navy;
  font-weight: bold;
  text-decoration: none;
}
</style>