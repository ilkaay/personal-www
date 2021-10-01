<template>
  <div>
    <div
      class="navbar navbar-expand-lg pt-4"
      style="position: absolute;
        top: 40%; right: 2%"
    >
      <ul class="list-unstyled">
        <li>
          <router-link to="projects" class="navbar-brand float-end"
            >Projects</router-link
          >
        </li>
        <li>
          <router-link to="blog" class="navbar-brand float-end mt-2"
            >Blog</router-link
          >
        </li>
        <li>
          <router-link to="resume" class="navbar-brand float-end mt-2"
            >Resume</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
nav {
  background-color: #040404;
}
a,
a:visited,
a:hover,
a:active {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: relative;
  transition: 0.5s color ease;
  text-decoration: none;
  color: #f4f4f4;
  font-size: 1.3rem;
  transition: 1s;
}
a:hover {
  color: #0e8999;
  text-shadow: 0 0 2rem #0e8999;
  font-size: 1.5rem;
}
a:after {
  content: "";
  transition: 0.5s all ease;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  bottom: -0.25em;
  height: 0.15rem;
  width: 0;
  background: #0e8999;
  right: 0;
  box-shadow: 0 0 2rem #0e8999;
}

a:hover:after {
  width: 100%;
}
</style>
