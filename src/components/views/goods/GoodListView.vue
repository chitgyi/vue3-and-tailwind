<template>
  <div class="m-3">
    <!-- start table header -->
    <div class="grid grid-cols-6">
      <div class="flex justify-around">
        <div class="p-2 font-bold text-lg">#</div>
        <div class="p-2 font-bold text-lg">ID</div>
      </div>
      <div class="p-2 font-bold text-lg col-span-2">Name</div>
      <div class="p-2 font-bold text-lg text-center">Quantity</div>
      <div class="p-2 font-bold text-lg text-right">Price</div>
      <div class="p-2 font-bold text-lg text-right">Actions</div>
    </div>
    <!-- end table header -->

    <!-- start table body -->
    <div class="grid grid-cols-6 border-b" v-for="(good, index) in goods" :key="index">
      <div class="flex justify-around">
        <div class="p-2">{{ index + 1 }}</div>
        <div class="p-2">{{ index }}</div>
      </div>
      <div class="p-2 col-span-2">{{ good.name }}</div>
      <div class="p-2 text-center align-middle">{{ good.quantity }}</div>
      <div class="p-2 text-right">{{ good.price }}</div>

      <!-- start action icons -->
      <div class="p-2 text-right">
        <div class="flex justify-end space-x-3">
          <!-- start edit icon -->
          <div class="cursor-pointer" title="Edit" @click="onEdit(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="green"
              class="w-5 h-5"
            >
              <path
                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
              />
            </svg>
          </div>
          <!-- end edit icon -->

          <!-- start delete icon -->
          <div class="cursor-pointer" title="Delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="red"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
          <!-- end delete icon -->
        </div>
      </div>
      <!-- end action icons -->
    </div>
    <!-- end table body -->

    <!-- start edit modal view -->
    <edit-goods-modal-view />
    <!-- end edit modal view -->

    <!-- start delete modal view -->
    <!-- end delete modal view -->
  </div>
</template>

<script>
import { inject } from "vue";
import EditGoodsModalView from "./EditGoodsModalView";
export default {
  props: {
    goods: Array,
  },
  components: { EditGoodsModalView },

  setup() {
    const { show } = inject("DIALOG_PROVIDER");
    const onEdit = (index) => {
      show.value = !show.value;
      console.log(index);
    };

    return { show, onEdit };
  },
};
</script>

<style lang="scss" scoped></style>
