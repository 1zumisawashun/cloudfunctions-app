<template>
  <div class="common-container">
    <div>ユーザ番号</div>
    <p>userID from $store: {{ $store.state.user.user.uid }}</p>
    <p>userID from $route: {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>