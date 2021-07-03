import firebase from "~/plugins/firebase";

const authSwitchLinks = document.querySelectorAll(".switch");
const authModals = document.querySelectorAll(".auth .modal");
const authWrapper = document.querySelector(".auth");
const registerForm = document.querySelector(".register");
const loginForm = document.querySelector(".login");
const signOut = document.querySelector(".sign-out");

authSwitchLinks.forEach(link => {
  console.log(link);
  link.addEventListener("click", () => {
    authModals.forEach(modal => modal.classList.toggle("active"));
    console.log("modalの開け閉めをしています。");
    console.log(modal);
  });
});

registerForm.addEventListener("submit", e => {
  e.preventDefault();
  const email = registerForm.email.value;
  const password = registerForm.password.value;
  //inputのnameで該当するvalueを取得する
  console.log(email, password);

  console.log(firebase.auth().createUserWithEmailAndPassword(email, password));
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      console.log("register", user);
      registerForm.reset();
      //なぜかバリデーションがかかっている。passは6桁以上にする必要あり。
    })
    .catch(error => {
      registerForm.querySelector(".error").textContent = error.message;
      alert("error");
    });
});

loginForm.addEventListener("submit", e => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  //inputのnameで該当するvalueを取得する
  console.log(email, password);

  console.log(firebase.auth().createUserWithEmailAndPassword(email, password));
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      console.log("login", user);
      loginForm.reset();
      //firebaseAuthのバリデートでpassは6桁以上にする必要あり。
    })
    .catch(error => {
      loginForm.querySelector(".error").textContent = error.message;
      alert("error");
    });
});

//sign out
signOut.addEventListener("click", () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("signout");
    });
});

//auth listner
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("ok", user);
    authWrapper.classList.remove("open");
    //register,loginFormの表示を消す
    authModals.forEach(modal => {
      modal.classList.remove("active");
      //activeはregisterかsigninかの切替で付与
    });
  } else {
    authWrapper.classList.add("open");
    authModals[0].classList.add("active");
    alert("do not login");
  }
});
