<template>
  <div class="m-3">
    <div class="shadow-md p-2 rounded">
      <div class="flex items-center">
        <serach-svg />
        <input
          class="border border-transparent focus:outline-none flex-auto px-3 leading-loose"
          placeholder="Search..."
          v-model="search"
        />
      </div>
      <div class="border-t pt-2" v-if="serachResult">
        <cash-search-list-view :results="serachResult" :add="add" />
      </div>
    </div>
    <casher-list-view
      :goods="goods"
      :orderByPrice="orderByPrice"
      :orderByQuantity="orderByQuantity"
      :addQuantity="addQuantity"
      :reduceQuantity="reduceQuantity"
      :remove="remove"
    />
  </div>
</template>

<script>
import { inject } from "vue";
import SerachSvg from "../assets/path/serach-svg.vue";
import CasherListView from "../components/views/casher/casher-list-view.vue";
import CashSearchListView from "../components/views/casher/cash-search-list-view.vue";

export default {
  components: { SerachSvg, CasherListView, CashSearchListView },
  setup() {
    const {
      cashlist,
      add,
      addQuantity,
      serachResult,
      reduceQuantity,
      search,
      remove,
      orderByPrice,
      orderByQuantity,
    } = inject("CASH_PROVIDER");

    return {
      goods: cashlist,
      serachResult,
      add,
      addQuantity,
      reduceQuantity,
      search,
      remove,
      orderByPrice,
      orderByQuantity,
    };
  },
};
</script>
