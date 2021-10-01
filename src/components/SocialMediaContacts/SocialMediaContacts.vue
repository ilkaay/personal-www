<template>
  <div>
    <twitter :twitter="twitter" :class="getClass()" />
    <instagram :instagram="instagram" :class="getClass()" />
    <linked-in :linkedIn="linkedIn" :class="getClass()" />
    <github :github="github" :class="getClass()" />
    <mail :mail="email" :class="getClass()" />
  </div>
</template>

<script>
import Twitter from "./Accounts/Twitter";
import Instagram from "./Accounts/Instagram";
import LinkedIn from "./Accounts/LinkedIn";
import Github from "./Accounts/Github";
import Mail from "./Accounts/Mail";
export default {
  props: ["vertical"],
  components: {
    Twitter,
    Instagram,
    LinkedIn,
    Github,
    Mail
  },
  data() {
    return {
      twitter: "https://twitter.com/ilkaayyuksel",
      instagram: "https://www.instagram.com/_ilkaay.yuksel/",
      linkedIn: "https://www.linkedin.com/in/ilkaayyuksel/",
      github: "https://github.com/ilkaay",
      email: "mailto:ilkaay.yuksel@gmail.com"
    };
  },
  methods: {
    getClass() {
      return {
        "m-4 h3 d-block": this.vertical,
        "mx-4 h2 d-inline-block": !this.vertical
      };
    }
  }
};
</script>
