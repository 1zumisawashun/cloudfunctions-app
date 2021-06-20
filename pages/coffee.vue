<template>
  <div class="common-container">
    <PageHeader></PageHeader>
    <ReservationForm></ReservationForm>
    <div class="coffee-container">
      <div class="coffee-block" v-for="post in posts" :key="post.id">
        <p class="item">{{ post.fields.name.stringValue }}</p>
        <p class="item">{{ post.fields.category.stringValue }}</p>
        <p class="item">{{ post.fields.hotorice.stringValue }}</p>
        <p class="item">{{ post.fields.recommend.stringValue }}</p>
      </div>
      <div class="coffee-card-container">
        <p class="headline">HotBeverage</p>
        <carousel
          :per-page="3"
          :loop="true"
          :autoplay="true"
          :pagination-padding="5"
          :autoplay-timeout="4000"
          class="coffee-card-wrapper"
          :navigation-enabled="true"
          navigation-prev-label="<"
          navigation-next-label=">"
        >
          <slide> <Card></Card></slide>
          <slide> <Card></Card></slide>
          <slide> <Card></Card></slide>
          <slide> <Card></Card></slide>
          <slide> <Card></Card></slide>
          <slide> <Card></Card></slide>
        </carousel>
        <p class="footline">HotBeverageを全て見る</p>
      </div>
      <div class="alcohol-card-container">
        <p class="headline">IceBeverage</p>
        <carousel
          :per-page="3"
          :loop="true"
          :autoplay="true"
          :pagination-padding="5"
          :autoplay-timeout="4000"
          class="alcohol-card-wrapper"
          :navigation-enabled="true"
          navigation-prev-label="<"
          navigation-next-label=">"
        >
          <slide> <Card></Card></slide>
          <slide> <Card></Card></slide>
          <slide> <Card></Card></slide>
          <slide> <Card></Card></slide>
          <slide> <Card></Card></slide>
          <slide> <Card></Card></slide>
        </carousel>
        <p class="footline">IceBeverageを全て見る</p>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import ReservationForm from "@/components/ReservationForm/ReservationForm.vue";
import Card from "@/components/Card.vue";
import Carousel from "vue-carousel/src/Carousel.vue";
import Slide from "vue-carousel/src/Slide.vue";
export default {
  data() {
    return {};
  },
  components: {
    PageHeader,
    ReservationForm,
    Card,
    Carousel,
    Slide,
  },
  async asyncData({ $axios }) {
    const response = await $axios.$get(
      "https://firestore.googleapis.com/v1/projects/otsudori-7fdf5/databases/(default)/documents/posts"
    );
    console.log(response.documents[0].fields);
    console.log(response.documents[1].fields);
    return { posts: response.documents };
  },
};
</script>

<style scoped>
.coffee-container {
  min-height: 1000px;
}
.coffee-block {
  width: 80%;
  margin: 1% auto;
}
.item {
  display: block;
  background-color: #f1f1f1;
}
.alcohol-card-container,
.coffee-card-container {
  margin: 1% 0;
  padding: 1% 0;
  background-color: #f1f1f1;
}
.alcohol-card-wrapper,
.coffee-card-wrapper {
  width: 70%;
  margin: 0 auto;
  display: flex;
}
.headline {
  width: 68%;
  margin: 1% auto;
  font-size: 18px;
  font-weight: bold;
}
.footline {
  width: 68%;
  margin: 1% auto;
  font-size: 18px;
  font-weight: bold;
  text-align: right;
}
.VueCarousel-navigation-next,
.VueCarousel-navigation-prev {
  font-size: 30px;
  font-weight: bold;
}
.VueCarousel-pagination {
  display: none;
}
</style>