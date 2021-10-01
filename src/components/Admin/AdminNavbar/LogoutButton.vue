<template>
  <button @click="logout" class="btn btn-dark me-1">
    Logout
  </button>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("deAuthenticate");
      this.$router.replace("login");
    }
  }
};
</script>
