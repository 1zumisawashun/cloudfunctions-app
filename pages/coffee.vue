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
      <div class="card-wrapper">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import ReservationForm from "@/components/ReservationForm/ReservationForm.vue";
import Card from "@/components/Card.vue";
export default {
  data() {
    return {};
  },
  components: {
    PageHeader,
    ReservationForm,
    Card,
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
.card-wrapper {
  display: flex;
}
</style>