<template>
  <div class="post-container">
    <div class="new-request">
      <div class="modal">
        <h2>Request a Tutorial</h2>
        <form>
          <input type="text" name="request" placeholder="Request..." />
          <button>Submit Request</button>
          <a class="error"></a>
        </form>
      </div>
    </div>
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
      <label for="image">画像</label>
      <input type="file" id="image" name="image" @change="onFileChange" />
    </div>
    <div>
      <div class="preview">
        <img :src="this.preview.file" alt="" class="image" />
        <img :src="this.upload.file" alt="" class="image" />
      </div>
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
import firebase from "~/plugins/firebase";
export default {
  data() {
    return {
      shop: "",
      name: "",
      career: "",
      image: "",
      place: "",
      upload: {
        file: "",
      },
      preview: {
        file: "",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    console.log(this.user.user.uid);
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
    onFileChange(e) {
      this.upload.file = e.target.files[0];
      if (this.upload.file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.preview.file = reader.result + "";
          console.log(this.preview.file);
          console.log(this);
          // console.log(this.preview.file);
        };
        reader.readAsDataURL(this.upload.file);
        console.log("選択完了");
        this.submitImg(this.upload.file);
      }
    },
    submitImg(file) {
      let storage = firebase.storage();
      let storageRef = storage
        .ref()
        .child(`/${this.user.user.uid}/` + file.name);
      storageRef
        .put(file)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
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
.image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>