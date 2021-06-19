<template>
  <div class="common-container">
    <PageHeader></PageHeader>
    <div class="coffee-container">
      <p>{{ tests }}</p>
      <p>{{ posts }}</p>
      <button @click="submit()">test</button>
      <section class="search"></section>
      <section class="article"></section>
      <section class="post"></section>
    </div>
    <ReservationForm></ReservationForm>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import ReservationForm from "@/components/ReservationForm/ReservationForm.vue";
export default {
  data() {
    return {
      tests: "",
      posts: "",
    };
  },
  components: {
    PageHeader,
    ReservationForm,
  },
  async asyncData({ $axios }) {
    const response = await $axios.get(
      "https://firestore.googleapis.com/v1/projects/otsudori-7fdf5/databases/(default)/documents/test"
    );
    return { tests: response };
    console.log(posts);
  },
  methods: {
    submit: async function () {
      const url =
        "https://firestore.googleapis.com/v1/projects/otsudori-7fdf5/databases/(default)/documents/test/rlRYwqfEfOUrSozDW7Ek/comment";
      // ネストのデータを送信する時はidを指定する必要がある。
      const res = await this.$axios.$post(url, {
        fields: {
          name: {
            stringValue: "ネストに通信しています",
          },
          comment: {
            stringValue: "これもネストに通信しています",
          },
        },
      });
      console.log(res);
    },
  },
};
</script>

<style scoped>
.coffee-container {
  min-height: 1000px;
}
</style>