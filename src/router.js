import { createWebHistory, createRouter } from "vue-router";
import Home from "./layouts/Home";
import Products from "./layouts/Products";
import Contact from "./layouts/Contact";
import Goods from './layouts/Goods';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/goods",
    name: "Goods",
    component: Goods,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
