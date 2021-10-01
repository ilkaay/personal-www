<template>
  <div class="row">
    <social-media-contacts
      :vertical="true"
      style="position: absolute; top: 35%; left: 1%"
    />
    <main-navbar />
    <display-name />
    <display-description />
  </div>
</template>

<script>
import SocialMediaContacts from "../SocialMediaContacts/SocialMediaContacts";
import DisplayName from "./DisplayName";
import DisplayDescription from "./DisplayDescription";
import MainNavbar from "../MainNavbar/MainNavbar";
export default {
  components: {
    SocialMediaContacts,
    DisplayName,
    DisplayDescription,
    MainNavbar,
  },
};
</script>

<style scoped>
.row {
  letter-spacing: 2px;
  height: 100vh;
  background-image: url("../../assets/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}
</style>
