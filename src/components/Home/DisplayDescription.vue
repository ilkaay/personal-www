<template>
  <div class="text-center info-about">
    <h3 class="p-5">{{ description }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: "Self-taught software engineer"
    };
  }
};
</script>

<style scoped>
.info-about {
  position: absolute;
  bottom: 20%;
  color: #f4f4f4;
}
</style>
