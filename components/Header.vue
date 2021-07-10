<template>
  <header>
    <div class="new-request" ref="new_request">
      <div class="modal">
        <h2>Request a Tutorial</h2>
        <form ref="request_form">
          <input type="text" name="request" placeholder="Request..." />
          <button>Submit Request</button>
          <a class="error"></a>
        </form>
      </div>
    </div>
    <div class="logo">
      <img src="@/assets/images/logo_transparent.png" alt="" class="image" />
    </div>
    <a class="add-request" ref="add_request">add request</a>
    <div class="link">
      <a href="http://localhost:3000/login">home</a>
      <a class="sign-out">sign out</a>
      <nuxt-link v-if="isAuthenticated" :to="`/users/${userId}`"
        >my page</nuxt-link
      >
    </div>
  </header>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters["user/isAuthenticated"];
    },
    userId() {
      return this.$store.state.user.user.uid;
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
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 70px;
  padding: 20px;
  background: white;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
}
header a {
  margin-left: 10px;
  border-bottom: 2px solid #ffe100;
  padding: 4px;
  cursor: pointer;
}
header a:hover {
  background: #ffe100;
  color: black;
}
.link {
  width: 20%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}
.logo {
  width: 20%;
}
.image {
  width: 130px;
  height: 35px;
  object-fit: cover;
}
</style>