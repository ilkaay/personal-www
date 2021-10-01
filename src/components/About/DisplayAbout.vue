<template>
  <div class="col-6 about-text-container">
    <h4 class="about-text">
      {{ aboutText }}
    </h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutText: `I am a 4th grade computer engineering student at Eskişehir Osmangazi
          University. I passionate about software development and designing
          websites. I taught myself about front-end development because of that
          passion. I learned HTML, CSS, JS and after that I learned VUE and
          GraphQL to develop more professional apps. I am still teaching myself
          about front-end engineering and currently I am learning React, React
          Native and Typescript. I am looking for new things to learn, to be a
          better engineer.`
    };
  }
};
</script>

<style scoped>
.about-text-container {
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-left: 0.2rem #040404 solid;
}
.about-text {
  margin-left: 5rem;
  line-height: 2rem;
}
</style>
