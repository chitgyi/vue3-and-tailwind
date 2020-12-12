import { createWebHistory, createRouter } from "vue-router";
import Home from "./layouts/Home";
import Products from "./layouts/Products";
import Contact from "./layouts/Contact";
import Goods from './layouts/Goods';
import Casher from './layouts/Casher';
import Transations from './layouts/Transations';

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
  },{
    path: "/casher",
    name: "Casher",
    component: Casher,
  },{
    path: "/transations",
    name: "Transations",
    component: Transations,
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
