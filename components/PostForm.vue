<template>
  <div>
    <!-- link -->
    <a class="add-request" ref="add_request">add request</a>
    <!-- modal -->
    <div class="new-request" ref="new_request">
      <div class="modal">
        <h2>Request a Tutorial</h2>
        <form ref="request_form">
          <input type="text" name="request" placeholder="Request..." />
          <input type="text" name="shop" placeholder="Shop Name..." />
          <input type="text" name="user" placeholder="User Name..." />
          <input type="text" name="career" placeholder="Career..." />
          <input type="text" name="place" placeholder="Shop Place..." />
          <!-- <input type="file" name="image" @change="onFileChange" />
          <div class="preview">
            <img :src="this.preview.file" alt="" class="image" />
            <img :src="this.upload.file" alt="" class="image" />
          </div> -->
          <button>Submit Request</button>
          <a class="error"></a>
        </form>
      </div>
    </div>
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
    this.requestAddEventListner();
    this.requestModalEventListner();
    this.requestFormEventListner();
  },
  methods: {
    requestAddEventListner() {
      const requestModal = this.$refs.new_request;
      const requestLink = this.$refs.add_request;
      requestLink.addEventListener("click", () => {
        requestModal.classList.add("open");
        console.log("request-modalを開いています。");
      });
    },
    requestModalEventListner() {
      const requestModal = this.$refs.new_request;
      requestModal.addEventListener("click", (e) => {
        if (e.target.classList.contains("new-request")) {
          console.log(e.target);
          requestModal.classList.remove("open");
        }
      });
    },
    requestFormEventListner() {
      const requestModal = this.$refs.new_request;
      const requestForm = this.$refs.request_form;
      requestForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const addRequest = firebase.functions().httpsCallable("addRequest");
        addRequest({
          text: requestForm.request.value,
        })
          .then(() => {
            requestForm.reset();
            console.log("ここまで来ている？");
            requestModal.classList.remove("open");
            requestForm.querySelector(".error").textContent = "";
          })
          .catch((error) => {
            alert("error!");
            requestForm.querySelector(".error").textContent = error.message;
          });
      });
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