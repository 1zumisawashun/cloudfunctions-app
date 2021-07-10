<template>
  <header>
    <div class="logo">
      <img src="@/assets/images/logo_transparent.png" alt="" class="image" />
    </div>
    <div class="link">
      <a><PostForm></PostForm></a>
      <a href="http://localhost:3000/login">home</a>
      <a class="sign-out">sign out</a>
      <nuxt-link v-if="isAuthenticated" :to="`/users/${userId}`"
        >my page</nuxt-link
      >
    </div>
  </header>
</template>

<script>
import firebase from "~/plugins/firebase";
import PostForm from "@/components/PostForm.vue";
export default {
  components: {
    PostForm,
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["user/isAuthenticated"];
    },
    userId() {
      return this.$store.state.user.user.uid;
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
  width: 30%;
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