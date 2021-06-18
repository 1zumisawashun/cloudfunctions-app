<template>
  <div class="common-container">
    <div>ユーザ番号：{{ userid }}</div>
  </div>
</template>

<script>
//creator/idで動的にアクセスすることができる
//ログインの時にcreatorにユニーク番号を付与して管理することができる。
export default {
  asyncData({ params }) {
    const userid = params.id;
    return { userid };
  },
};
</script>

<style>
</style>