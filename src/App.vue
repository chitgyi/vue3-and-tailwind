<template>
  <app-bar />

  <slide-bar />

  <main-layout />
</template>

<script>
import { provide } from "vue";

import useProduct from "./composables/product";
import useDialog from "./composables/dialog";
import useApp from "./composables/app";
import useGoods from "./composables/goods";
import useCash from "./composables/cash";

import SlideBar from "./components/nav-bars/SlideBar.vue";
import AppBar from "./components/nav-bars/AppBar.vue";
import MainLayout from "./layouts/MainLayout.vue";

export default {
  components: { SlideBar, AppBar, MainLayout },
  setup() {
    provide("POST_PROVIDER", useProduct());
    provide("DIALOG_PROVIDER", useDialog());
    provide("APP_PROVIDER", useApp());
    provide("GOODS_PROVIDER", useGoods());
    provide("CASH_PROVIDER", useCash());
  },
};
</script>

<style scoped></style>
