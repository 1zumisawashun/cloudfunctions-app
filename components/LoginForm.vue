<template>
  <div class="auth open">
    <div class="modal">
      <!-- 最初はloginFormを表示する -->
      <h1>Login</h1>
      <form class="login">
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <button>Login</button>
        <p class="error"></p>
      </form>
      <div>No account?<a class="switch">Register insted!</a></div>
    </div>
    <div class="modal">
      <h1>Register</h1>
      <form class="register">
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <button>Register</button>
        <p class="error"></p>
      </form>
      <div>Got on account?<a class="switch">Login insted!</a></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    //cloud functionsでログイン機能の実装しているので下記は関係ない
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
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          //ここでゲストログインをユーザは痕跡を全て消す。
          this.$store.commit("user/setUser", null);
          window.alert("ログアウトに成功しました");
        })
        .catch((e) => {
          window.alert("ログアウトに失敗しました");
          console.log(e);
        });
    },
  },
};
</script>

<style>
</style>