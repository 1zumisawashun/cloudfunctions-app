<template>
  <div class="post-container">
    <div class="item">
      <label for="shop">店舗名 </label>
      <input type="text" id="shop" name="shop" v-model="shop" />
    </div>
    <div class="item">
      <label for="name">作り手</label>
      <input type="text" id="name" name="name" v-model="name" />
    </div>
    <div class="item">
      <label for="career">経験年数</label>
      <input type="text" id="career" name="career" v-model="career" />
    </div>
    <div class="item">
      <label for="image"></label>
      <input type="file" id="image" name="image" />
    </div>
    <div class="item">
      <label for="place">場所</label>
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
      shop: "",
      name: "",
      career: "",
      image: "",
      place: "",
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
            shop: {
              stringValue: this.shop,
            },
            name: {
              stringValue: this.name,
            },
            career: {
              stringValue: this.career,
            },
            image: {
              stringValue: this.image,
            },
            place: {
              stringValue: this.place,
            },
          },
        })
        .then(() => {
          (this.shop = null),
            (this.name = null),
            (this.career = null),
            (this.image = null);
          this.place = null;
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