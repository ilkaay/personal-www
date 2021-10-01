import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Main from "../components/Main/Main";
import Projects from "../components/Projects/Projects";
import Blog from "../components/Blog/Blog";
import Resume from "../components/Resume/Resume";
import Login from "../components/Login/Login";
import Admin from "../components/Admin/Admin";

const routes = [
  { path: "/", name: "main", component: Main },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/resume",
    name: "resume",
    component: Resume,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next("/");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
