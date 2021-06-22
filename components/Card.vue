<template>
  <div class="card-container">
    <div class="info-block">
      <div class="description">
        <div class="icon">
          <img src="https://placehold.jp/50x50.png" alt="" class="image" />
        </div>
        <div class="profile">
          <div class="name">アルサーガパートナーズ</div>
          <div class="message">目が覚めるようなコーヒーを淹れます</div>
        </div>
      </div>
      <div class="experience">経験8年</div>
      <div class="reputation">
        <div class="rate">★★★★☆</div>
        <div class="comment">コメント</div>
      </div>
    </div>
    <div class="picture">
      <img src="https://placehold.jp/250x200.png" alt="" class="image" />
    </div>
    <div class="place">渋谷マークシティ15階</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-container {
  width: 90%;
  background-color: #f1f1f1;
  font-size: 12px;
  font-weight: bold;
  padding: 1%;
  margin: 3%;
  border-radius: 10px;
  box-shadow: 0 0 8px gray;
}
.info-block {
  padding: 3% 10%;
}
.description {
  display: flex;
}
.icon {
  width: 30%;
  margin: 0 auto;
}
.icon .image {
  border-radius: 100%;
}
.picture {
  align-items: center;
}
.picture .image {
  border-radius: 10px;
  display: block;
  margin: 0 auto;
}
.reputation {
  display: flex;
}
.place {
  width: 80%;
  margin: 0 auto;
}
</style>