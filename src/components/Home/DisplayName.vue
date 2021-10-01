<template>
  <div class="text-center info-name">
    <h2 class="p-5">{{ name }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "İlkay Yüksel"
    };
  }
};
</script>

<style scoped>
.info-name {
  position: absolute;
  top: 20%;
  color: #f4f4f4;
}
</style>
