<template>
  <div>
    <home />
    <about />
    <app-footer />
  </div>
</template>

<script>
import Home from "../Home/Home";
import About from "../About/About";
import AppFooter from "../AppFooter/AppFooter";

export default {
  components: {
    Home,
    About,
    AppFooter,
  },
};
</script>
