import { createWebHistory, createRouter } from "vue-router";
import Home from "./layouts/Home";
import Posts from "./layouts/Posts";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;