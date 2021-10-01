<template>
  <div style="position: absolute; top: 30%; left: 35%; right: 33%">
    <div class="row">
      <div class="col-10 mb-5">
        <h1>Login</h1>
      </div>
    </div>

    <form name="form" class="row" @submit.prevent="checkForm">
      <div class="col-10">
        <label class="form-label"><strong>Username</strong></label>
        <input
          v-model="user.username"
          @blur="v$.user.username.$touch"
          type="text"
          class="form-control"
          :class="{
            'is-invalid': v$.user.username.required.$invalid && buttonClicked,
          }"
          placeholder="Enter Username"
        />
        <small
          v-if="v$.user.username.required.$invalid && buttonClicked"
          class="form-text text-danger"
        >
          Username is required !
        </small>
      </div>

      <div class="col-10 mt-4">
        <label class="form-label"><strong>Password</strong></label>
        <input
          v-model="user.password"
          @blur="v$.user.password.$touch"
          type="password"
          class="form-control"
          :class="{
            'is-invalid': v$.user.password.required.$invalid && buttonClicked,
          }"
          placeholder="Enter Password"
        />
        <small
          v-if="v$.user.password.required.$invalid && buttonClicked"
          class="form-text text-danger"
        >
          Password is required !
        </small>
      </div>

      <div class="col-10 mt-5">
        <button
          class="col-12 btn btn-dark text-white font-weight-bold p-2"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import store from "../../store";
import router from "../../router";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      user: {
        username: null,
        password: null,
      },
      buttonClicked: false,
    };
  },
  validations: {
    user: {
      username: { required },
      password: { required },
    },
  },
  methods: {
    checkForm() {
      let user = {
        username: this.user.username,
        password: this.user.password,
      };
      this.buttonClicked = true;
      if (!this.v$.$invalid && this.buttonClicked) {
        store
          .dispatch("authenticate", user)
          .then(() => {
            router.replace("admin");
          })
          .catch((err) => {
            alert(err);
          });
      }
    },
  },
};
</script>

<style scoped>
::placeholder {
  color: #040404;
  opacity: 0.8;
}

input {
  background-color: #f4f4f4;
  border: 1px solid #040404;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #f4f4f4;
}

h1 {
  letter-spacing: 2px;
  font-family: Source Sans Pro;
  font-weight: lighter;
  padding: 10px;
  border-bottom: 2px solid;
  color: #040404;
}
</style>
