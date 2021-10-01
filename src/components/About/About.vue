<template>
  <div>
    <div class="row">
      <div class="col-5 text-center">
        <h2 class="fw-bolder about-header">
          About Me
        </h2>
      </div>
      <display-about />
    </div>
  </div>
</template>

<script>
import DisplayAbout from "./DisplayAbout.vue";
export default {
  components: {
    DisplayAbout
  }
};
</script>

<style scoped>
div {
  background-color: #f4f4f4;
  padding: 3%;
}

.about-header {
  position: relative;
  top: 40%;
  font-size: 3.5rem;
}
</style>
