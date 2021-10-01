<template>
  <span>
    <a :href="instagram" target="_blank">
      <i class="bi bi-instagram" />
    </a>
  </span>
</template>

<script>
export default {
  props: ["instagram"]
};
</script>

<style scoped>
a {
  color: #f4f4f4;
  transition: 0.5s;
}
a:hover {
  text-shadow: 0 0 3rem #0e8999;
  cursor: pointer;
  font-size: 2.5rem;
}
</style>
