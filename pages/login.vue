<template>
  <!-- <div class="common-container">
    <button @click="login()">login</button>
    <p v-show="!this.isAuthenticated">user is not logined</p>
    <p v-show="this.isAuthenticated">user is logined</p>
  </div> -->

  <div class="auth">
    <div class="auth open">
      <h1>Login</h1>
      <form class="login">
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <button>Login</button>
        <p class="error"></p>
      </form>
      <div>No account?<a class="swhich">Register insted!</a></div>
    </div>
    <div class="modal1">
      <h1>Register</h1>
      <form class="register">
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <button>Register</button>
        <p class="error"></p>
      </form>
      <div>Got on account?<a class="swhich">Login insted!</a></div>
    </div>

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

    <header>
      <div>
        <a class="add-request">add request</a>
        <a class="sign-out">sign out</a>
      </div>
    </header>

    <section class="content">
      <h1>Tutorial Request</h1>
      <ul class="request-list">
        <li>
          <span class="text">Laravel 6 Tutorial</span>
          <div>
            <span class="votes">125</span>
            <i class="material-ion upvote"> arrow-upword</i>
          </div>
        </li>
      </ul>
    </section>
    <button class="item" @click="sayHello">say hello</button>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  data() {
    return {};
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["user/isAuthenticated"];
    },
  },
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const user = {
            uid: result.user.uid,
            name: result.user.displayName,
            image: result.user.photoURL,
            email: result.user.email,
          };
          this.$store.commit("user/setUser", user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    sayHello() {
      const sayHello = firebase.functions().httpsCallable("sayHello");
      sayHello({ name: `shun` }).then((result) => {
        //resultの中にcloud functionsのretrunの返り値が入る
        alert(result.data);
      });
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  background: #fafafa;
}
body,
h1,
h2,
p,
a,
input {
  color: #555;
  font-family: Consolas, Arial;
  text-decoration: none;
}
ul {
  margin: 0;
  padding: 0;
}
header {
  width: 100%;
  padding: 20px;
  text-align: right;
  background: white;
  box-sizing: border-box;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
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
/* .auth {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #fafafa;
  display: none;
  z-index: 1;
} */
.auth .open {
  display: block;
}
.auth a {
  text-decoration: underline;
  cursor: pointer;
}
</style>