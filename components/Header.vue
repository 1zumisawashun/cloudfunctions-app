<template>
  <div class="header-container">
    <div class="wrapper">
      <div class="logo">otsudori</div>
      <div class="link">
        <nuxt-link class="item" to="/coffee">coffee</nuxt-link>
        <nuxt-link class="item" to="/alcohol">alcohol</nuxt-link>
        <nuxt-link class="item" to="/search">search</nuxt-link>
        <nuxt-link class="item" to="/login">login</nuxt-link>
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
.wrapper {
  width: 80%;
  height: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.logo {
  width: 10%;
}
.link {
  width: 30%;
  display: flex;
  justify-content: space-between;
}
</style>