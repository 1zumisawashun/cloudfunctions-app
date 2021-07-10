<template>
  <div class="login-container">
    <div class="notification" :class="{ active: result }">{{ message }}</div>
    <LoginForm></LoginForm>
    <section class="content">
      <h1>Tutorial Request</h1>
      <ul class="request-list">
        <li v-for="request in requests" :key="request.id">
          <span class="text">{{ request.text }}</span>
          <div>
            <span class="votes">{{ request.upvotes }}</span>
            <i class="mdi mdi-check" @click="upvotedRequest(request.id)" />
          </div>
        </li>
      </ul>
    </section>
    <button class="item" @click="sayHello">say hello</button>
    <button class="item"><nuxt-link to="/coffee">coffee</nuxt-link></button>
    <button class="item"><nuxt-link to="/alcohol">alcohol</nuxt-link></button>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
import LoginForm from "@/components/LoginForm.vue";
export default {
  data() {
    return {
      message: "",
      requests: [],
      result: false,
    };
  },
  components: {
    LoginForm,
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["user/isAuthenticated"];
    },
  },
  mounted() {
    const ref = firebase
      .firestore()
      .collection("request")
      .orderBy("upvotes", "desc");
    ref.onSnapshot((snapshot) => {
      let requests = [];
      snapshot.forEach((doc) => {
        requests.push({ ...doc.data(), id: doc.id });
      });
      this.requests = requests;
    });
  },
  methods: {
    upvotedRequest(id) {
      const upvote = firebase.functions().httpsCallable("upvote");
      upvote({ id }).catch((error) => {
        this.showNotification(error.message);
      });
    },
    showNotification(msg) {
      this.result = true;
      this.message = msg;
      setTimeout(() => {
        this.result = false;
        this.message = "";
      }, 2000);
    },
    sayHello() {
      const sayHello = firebase.functions().httpsCallable("sayHello");
      sayHello({ name: `shun` }).then((result) => {
        alert(result.data);
      });
    },
  },
};
</script>

<style>
.content {
  max-width: 800px;
  margin: 50px auto 0;
}
.request-list li {
  padding: 20px;
  margin: 10px auto;
  list-style-type: none;
  background: white;
  border-radius: 10px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
}
.request-list .votes {
  position: relative;
  top: -5px;
  z-index: 0;
}
.request-list .upvote {
  cursor: pointer;
  border-radius: 50px;
}
.request-list .upvote:active {
  color: black;
  background: #ffe100;
}
.modal {
  width: 300px;
  padding: 30px;
  margin: 100px auto;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.new-request {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  top: 0;
  left: 0;

  display: none;
}
.new-request.open {
  display: block;
}
input {
  display: block;
  margin: 8px 0;
  padding: 8px 2px;
  border-width: 0 0 2px 0;
  width: 100%;
}
button {
  margin-top: 10px;
  padding: 8px 12px;
  background: #ffe100;
  border: 0;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
}

.auth {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #fafafa;
  display: none;
  z-index: 1;
}
.auth.open {
  display: block;
}
.auth a {
  text-decoration: underline;
  cursor: pointer;
}
.auth .modal {
  display: none;
}
.auth .modal.active {
  display: block;
}
.notification {
  width: 200px;
  padding: 20px;
  position: fixed;
  left: 50%;
  margin-left: -110px;
  top: 0;
  border-radius: 0 0 5px 5px;
  background: #ec2d2d;
  text-align: center;
  color: #fff;
  margin-top: -100%;
  transition: all 0.4s;
}
.notification.active {
  margin-top: 0;
}
</style>