<template>
  <div class="reservation-form-container">
    <p class="headline">予約する</p>
    <div class="button-block">
      <button class="item">メニューから探す</button>
      <button class="item">日付から探す</button>
      <button class="item">エリアから探す</button>
      <button class="item">現在地から探す</button>
    </div>
    <div class="search-block">
      <input type="text" class="serchbar" />
      <button class="searchbutton">クリック</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.reservation-form-container {
  width: 40%;
  height: 300px;
  border-radius: 30px;
  background-color: #f1f1f1;
}
.headline {
  width: 80%;
  margin: 5% auto;
}
.button-block {
  width: 80%;
  margin: 5% auto;
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 50%;
}
.search-block {
  width: 80%;
  margin: 5% auto;
}
</style>