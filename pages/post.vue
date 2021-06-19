<template>
  <div class="post-container">
    <input
      type="text"
      v-model="this.drinks"
      placeholder="提供できるドリンクの種類"
    />
    <input type="text" v-model="this.days" placeholder="稼働日" />
    <button @click="submit()">送信</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drinks: "",
      days: "",
    };
  },
  methods: {
    submit() {
      const url =
        "https://firestore.googleapis.com/v1/projects/otsudori-7fdf5/databases/(default)/documents/posts";
      // collectionがない場合は新規で作成しデータを格納する
      const res = this.$axios.$post(url, {
        fields: {
          drink: {
            stringValue: this.drinks,
          },
          workdays: {
            stringValue: this.days,
          },
        },
      });
      console.log(res);
    },
  },
};
</script>

<style>
</style>