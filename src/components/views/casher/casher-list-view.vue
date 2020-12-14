<template>
  <!-- start table header -->
  <div class="grid grid-cols-6 py-3">
    <div class="flex justify-around">
      <div class="font-bold text-lg">#</div>
      <div class="font-bold text-lg">ID</div>
    </div>
    <div class="font-bold text-lg col-span-2">Name</div>
    <div
      class="font-bold text-lg text-center cursor-pointer"
      @click="orderByQuantity((isOrderedQuantity = !isOrderedQuantity))"
    >
      Quantity
    </div>
    <div
      class="font-bold text-lg text-right cursor-pointer"
      @click="orderByPrice((isOrderedPrice = !isOrderedPrice))"
    >
      Price
    </div>
    <div class="font-bold text-center text-lg">Actions</div>
  </div>
  <!-- end table header -->

  <!-- start table body -->
  <div class="grid grid-cols-6 border-b py-3" v-for="(good, index) in goods" :key="index">
    <div class="flex justify-around">
      <div class="">{{ index + 1 }}</div>
      <div class="">{{ index }}</div>
    </div>
    <div class="col-span-2">{{ good.name }}</div>
    <div class="text-center align-middle">
      <div class="flex justify-center">
        <div class="bg-red-500 text-white add-cash-btn" @click="reduceQuantity(index)">
          -
        </div>
        <div class="mx-1.5">{{ good.quantity }}</div>
        <div class="bg-green-500 text-white add-cash-btn" @click="addQuantity(index)">
          +
        </div>
      </div>
    </div>
    <div class="text-right">{{ good.price * good.quantity }}</div>
    <div class="flex justify-center">
      <svg
        @click="remove(index)"
        class="w-6 h-6 cursor-pointer"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </div>
  </div>
  <!-- end table body -->
</template>

<script>
import { inject, ref } from "vue";
export default {
  props: {
    goods: Array,
    orderByPrice: Function,
    orderByQuantity: Function,
    addQuantity: Function,
    reduceQuantity: Function,
    remove: Function,
  },

  setup() {
    const isOrderedPrice = ref(false);
    const isOrderedQuantity = ref(false);
    const { show } = inject("DIALOG_PROVIDER");

    return { show, isOrderedQuantity, isOrderedPrice };
  },
};
</script>

<style lang="scss" scoped></style>
