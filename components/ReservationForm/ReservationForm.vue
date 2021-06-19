<template>
  <div class="reservation-form-container">
    <p class="headline">Reserve here..</p>
    <div class="button-block">
      <a class="item"><span>メニューから探す</span></a>
      <a class="item"><span>日付から探す</span></a>
      <a class="item"><span>エリアから探す</span></a>
      <a class="item"><span>現在地から探す</span></a>
    </div>
    <div class="search-block">
      <input type="text" class="sbox" />
      <button class="sbtn">検索</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.reservation-form-container {
  width: 35%;
  height: 300px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 8px gray;
  position: absolute;
  top: 17%;
  left: 15%;
}
.headline {
  width: 80%;
  margin: 5% auto;
  text-align: center;
  font-weight: bold;
}
.button-block {
  width: 80%;
  margin: 5% auto;
  display: flex;
  flex-wrap: wrap;
}
/* button */
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46%;
  height: 50px;
  margin: 2%;
  box-sizing: border-box;
  position: relative;
}
span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #f1f1f1;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  border-radius: 10px;
  position: absolute;
  top: -5px;
  left: 0;
  transition-duration: 0.2s;
}
.item:hover span {
  left: 0;
  top: 0;
  box-shadow: 0 0 8px gray;
}
/* searchbar */
.search-block {
  width: 80%;
  margin: 5% auto;
  position: relative; /*フォームの相対位置*/
}
.sbox {
  width: 70%;
  position: absolute;
  left: 0;
  top: 0;
  border: none;
  height: 50px;
  padding: 0 10px;
  border-radius: 5px 0 0 5px;
  background: #eee;
}
.sbtn {
  height: 50px;
  position: absolute;
  left: 70%;
  top: 0;
  padding: 0 30px;
  border-radius: 0 5px 5px 0;
  background: #7fbfff;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
}
</style>