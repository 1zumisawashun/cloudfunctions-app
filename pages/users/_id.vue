<template>
  <div class="user-container">
    <h1>マイページ</h1>
    <p>welcome!{{ this.user.uid }}</p>
    <ul>
      <li :class="{ clickBtn: tab === 1 }" @click="tab = 1">お気に入り</li>
      <li :class="{ clickBtn: tab === 2 }" @click="tab = 2">設定</li>
      <li :class="{ clickBtn: tab === 3 }" @click="tab = 3">サブスク</li>
      <li :class="{ clickBtn: tab === 4 }" @click="tab = 4">履歴</li>
    </ul>
    <div class="content">
      <div v-show="tab === 1" class="content-item">
        <p>お気に入りのコンテンツです</p>
      </div>
      <div v-show="tab === 2" class="content-item">
        <p>設定の画面です</p>
      </div>
      <div v-show="tab === 3" class="content-item">
        <p>サブスクのコンテンツです</p>
      </div>
      <div v-show="tab === 4" class="content-item">
        <p>視聴履歴です</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tab: 1,
    };
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
  },
};
</script>

<style scoped>
.user-container {
  width: 80%;
  margin: 0 auto;
}
ul {
  list-style: none;
  display: flex;
  text-align: center;
  width: 80%;
  margin: 0 auto;
}
li {
  background-color: gray;
  color: white;
  width: 25%;
  height: 50px;
  border: 1px solid white;
  padding: 10px;
}
.content {
  width: 100%;
  height: 200px;
  background-color: rgb(218, 218, 218);
}
.clickBtn {
  background-color: rgb(168, 168, 168);
}
</style>