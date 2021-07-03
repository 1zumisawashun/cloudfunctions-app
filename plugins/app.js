const requestModal = document.querySelector(".new-request");
const requestLink = document.querySelector(".add-request");

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
