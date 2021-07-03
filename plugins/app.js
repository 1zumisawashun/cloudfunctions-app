import firebase from "~/plugins/firebase";

const requestModal = document.querySelector(".new-request");
const requestLink = document.querySelector(".add-request");
const requestForm = document.querySelector(".new-request form");

requestLink.addEventListener("click", () => {
  requestModal.classList.add("open");
  console.log("request-modalを開いています。");
});
requestModal.addEventListener("click", e => {
  if (e.target.classList.contains("new-request")) {
    //classがnew-requestの箇所はクリックをしても閉じられない
    console.log(e.target);
    requestModal.classList.remove("open");
  }
});

requestForm.addEventListener("submit", e => {
  e.preventDefault();
  console.log("requestをしています！");
  const addRequest = firebase.functions().httpsCallable("addRequest");
  addRequest({
    text: requestForm.request.value
  })
    .then(() => {
      requestForm.reset();
      console.log("ここまで来ている？");
      requestModal.classList.remove("open");
      requestForm.querySelector(".error").textContent = "";
    })
    .catch(error => {
      alert("error!");
      requestForm.querySelector(".error").textContent = error.message;
    });
  console.log("一旦ここまで確認できる？");
});
