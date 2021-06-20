<template>
  <div class="post-container">
    <div class="item">
      <label for="name">店舗名 </label>
      <input type="text" id="name" name="name" v-model="name" />
    </div>
    <div class="item">
      <label for="category">作り手</label>
      <input type="text" id="category" name="category" v-model="category" />
    </div>
    <div class="item">
      <label for="useremail">経験年数</label>
      <input type="text" id="useremail" name="useremail" v-model="hotorice" />
    </div>
    <div class="item">
      <label for="image"></label>
      <input type="file" id="image" name="image" />
    </div>
    <div class="item">
      <label for="place">経験年数</label>
      <input type="text" id="place" name="place" v-model="place" />
    </div>
    <div class="submit">
      <button @click="submit()">登録</button>
    </div>
    <!-- user登録・編集とbevelegeの登録・編集の画面を作らなくてはいけない -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      category: "",
      hotorice: "",
      recommend: "",
    };
  },
  methods: {
    submit() {
      const url =
        "https://firestore.googleapis.com/v1/projects/otsudori-7fdf5/databases/(default)/documents/posts";
      // collectionがない場合は新規で作成しデータを格納する
      const res = this.$axios
        .$post(url, {
          fields: {
            name: {
              stringValue: this.name,
            },
            category: {
              stringValue: this.category,
            },
            hotorice: {
              stringValue: this.hotorice,
            },
            recommend: {
              stringValue: this.recommend,
            },
          },
        })
        .then(() => {
          (this.name = null),
            (this.category = null),
            (this.hotorice = null),
            (this.recommend = null);
        });
      alert("登録しました");
      console.log(res);
    },
  },
};
</script>

<style scoped>
.post-container {
  width: 80%;
  margin: 0 auto;
}
.item {
  width: 40%;
  height: 50px;
  display: block;
}
</style>