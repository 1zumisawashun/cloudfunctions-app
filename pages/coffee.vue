<template>
  <div class="common-container">
    <PageHeader></PageHeader>
    <div>コーヒー</div>
    <ReservationForm></ReservationForm>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import ReservationForm from "@/components/ReservationForm/ReservationForm.vue";
export default {
  components: {
    PageHeader,
    ReservationForm,
  },
};
</script>

<style scoped>
</style>