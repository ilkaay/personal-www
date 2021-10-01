<template>
  <div>
    <admin-navbar />
    <display-admin />
  </div>
</template>

<script>
import AdminNavbar from "./AdminNavbar/AdminNavbar.vue";
import DisplayAdmin from "./DisplayAdmin/DisplayAdmin.vue";

export default {
  components: {
    AdminNavbar,
    DisplayAdmin
  }
};
</script>
