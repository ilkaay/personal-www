<template>
  <div class="mt-5 text-center">
    <profile-photo class="p-5" />
    <edit-button />
  </div>
</template>

<script>
import ProfilePhoto from "../../Profile/ProfilePhoto.vue";
import EditButton from "./EditButton.vue";

export default {
  components: {
    ProfilePhoto,
    EditButton
  }
};
</script>
