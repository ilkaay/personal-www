<template>
  <footer class="text-center p-4">
    <social-media-contacts />
  </footer>
</template>

<script>
import SocialMediaContacts from "../SocialMediaContacts/SocialMediaContacts";

export default {
  components: {
    SocialMediaContacts
  }
};
</script>

<style scoped>
footer {
  background-color: #040404;
}
</style>
