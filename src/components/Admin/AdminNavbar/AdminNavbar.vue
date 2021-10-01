<template>
  <div class="navbar navbar-dark bg-dark p-2">
    <a href="#" class="navbar-brand mx-auto" style="font-size: 40px;">Admin</a>
    <logout-button />
  </div>
</template>

<script>
import LogoutButton from "./LogoutButton.vue";

export default {
  components: {
    LogoutButton
  }
};
</script>
