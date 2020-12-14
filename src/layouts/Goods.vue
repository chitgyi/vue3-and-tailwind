<template>
  <div class="m-3">
    <div class="flex flex-wrap items-center shadow-md p-2 rounded">
      <serach-svg />
      <input
        class="border border-transparent focus:outline-none flex-auto px-3 leading-loose"
        placeholder="Search..."
        v-model="search"
      />
    </div>
    <good-list-view
      :goods="goods"
      :onEdit="onEditGood"
      :onDelete="onDelete"
      :orderByPrice="orderByPrice"
      :orderByQuantity="orderByQuantity"
    />

    <!-- start edit modal view -->
    <edit-goods-modal-view :good="good" :onSave="onSaveEdit" />
    <!-- end edit modal view -->

    <!-- start delete modal view -->
    <!-- end delete modal view -->
  </div>
</template>

<script>
import { inject, onMounted, ref } from "vue";
import GoodListView from "../components/views/goods/GoodListView.vue";
import SerachSvg from "../assets/path/serach-svg.vue";
import EditGoodsModalView from "../components/views/goods/EditGoodsModalView.vue";
export default {
  components: { GoodListView, SerachSvg, EditGoodsModalView },
  setup() {
    const good = ref({});
    var indexed = 0;
    const {
      goods,
      search,
      loadGoods,
      onEdit,
      onDelete,
      orderByPrice,
      orderByQuantity,
    } = inject("GOODS_PROVIDER");
    const { show } = inject("DIALOG_PROVIDER");
    onMounted(() => loadGoods());

    const onEditGood = (index, data) => {
      good.value = data;
      show.value = !show.value;
      indexed = index;
    };

    const onSaveEdit = (data) => {
      onEdit(indexed, data);
      show.value = false;
    };

    return {
      goods,
      search,
      onDelete,
      onEdit,
      onEditGood,
      good,
      onSaveEdit,
      orderByPrice,
      orderByQuantity,
    };
  },
};
</script>
