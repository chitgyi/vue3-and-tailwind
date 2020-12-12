<template>
  <div class="">
    <good-list-view :goods="goods" />
  </div>
</template>

<script>
import { ref } from "vue";
import GoodListView from "../components/views/goods/GoodListView.vue";
export default {
  components: { GoodListView },
  setup() {
    const goods = ref([]);

    Array(100)
      .fill(0)
      .forEach((value, index) => {
        goods.value.push({
          name: `earum placeat eum modi eveniet quis ea, officia ducimus dolore similique incidunt eos maxime porro! ${index}`,
          id: index,
          price: index * 1000,
          quantity: index + 1,
        });
      });

    return { goods };
  },
};
</script>

<style lang="scss" scoped></style>
