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