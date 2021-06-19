<template>
  <div class="header-container">
    <div class="wrapper">
      <div class="logo">
        <img src="@/assets/images/logo2.png" alt="" class="image" />
      </div>
      <div class="link">
        <nuxt-link class="item" to="/coffee">COFFEE</nuxt-link>
        <nuxt-link class="item" to="/alcohol">ALCOHOL</nuxt-link>
        <nuxt-link class="item" to="/search">SEARCH</nuxt-link>
        <nuxt-link class="item" to="/login">LOGIN</nuxt-link>
        <nuxt-link class="item" to="/post">POST</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  height: auto;
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
  color: orangered;
  font-weight: bold;
  text-decoration: none;
}
</style>