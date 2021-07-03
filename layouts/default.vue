<template>
  <div>
    <!-- <Header></Header> -->
    <Nuxt />
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit({
          type: "user/setUser",
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          icon: user.photoURL,
        });
      } else {
        console.log("取得できていません。");
      }
    });
  },
};
</script>

<style>
/* html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
} */

body {
  margin: 0;
  background: #fafafa;
}
body,
h1,
h2,
p,
a,
input {
  color: #555;
  font-family: Consolas, Arial;
  text-decoration: none;
}
ul {
  margin: 0;
  padding: 0;
}
</style>
