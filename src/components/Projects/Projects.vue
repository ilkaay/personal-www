<template>
  <div class="wrapper">
    <div class="p-5 container">
      <h1 class="text-center fw-bolder pt-5" style="font-size: 3.5rem;">
        Projects
      </h1>
      <div class="mt-5">
        <ul class="list-unstyled card-deck mx-auto">
          <li v-for="index of 6" :key="index" class="d-inline-block card mt-5">
            <div class="card-body p-5">
              <p class="card-title d-inline-block h4" style="color: #ABC4FF">
                Repository name
              </p>
              <div class="float-end h4" style="color: #FAD948">
                <i class="bi bi-star-fill" /><span class="ps-2">5</span>
              </div>
              <br />

              <div v-if="index % 2 == 0" class="row">
                <span class="card-text col-8 my-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores sequi tenetur earum veritatis ipsa a.
                </span>
                <i
                  class="bi bi-file-code col-4 text-center"
                  style="font-size: calc(5rem + 5vw);"
                ></i>
              </div>
              <div v-else class="row">
                <i
                  class="bi bi-file-code-fill col-4 text-center"
                  style="font-size: calc(5rem + 5vw);"
                ></i>
                <span class="card-text col-8 my-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores sequi tenetur earum veritatis ipsa a.
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  color: #f4f4f4;
  background-color: #040404;
  height: 100%;
}
li {
  background-color: #040404;
  border: 0.2rem solid #f4f4f4;
  border-radius: 5rem;
  transition: 0.5s;
}
li:hover {
  border-color: #abc4ff;
  padding: 1rem;
  box-shadow: #abc4ff 0px 5px 25px 0px;
}
</style>
