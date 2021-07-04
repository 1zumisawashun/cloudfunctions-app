<template>
  <footer>
    <div class="footer-block">
      <div class="logo">
        <img src="@/assets/images/logo_transparent.png" alt="" class="image" />
      </div>
      <div class="link">
        <a>採用情報</a>
        <a>プレスキット</a>
        <a>取材に関するお問い合わせ</a>
        <a>ご利用規約</a>
        <a>プライバシーポリシー</a>
        <a>特定商取引法に関する表記</a>
        <a>お問い合わせ</a>
      </div>
      <!-- <div class="copyright">
      Copyright © 2021 Otsudori Co. All rights reserved.
    </div> -->
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  width: 100%;
  height: 80px;
  padding: 20px;
  background: white;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}
footer a {
  margin-left: 10px;
  border-bottom: 2px solid #ffe100;
  padding: 4px;
  cursor: pointer;
}
footer a:hover {
  background: #ffe100;
  color: black;
}
.footer-block {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.link {
  width: 80%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: bold;
  margin: auto 0;
}
.logo {
  width: 15%;
}
.image {
  width: 130px;
  height: 35px;
  object-fit: cover;
}
</style>