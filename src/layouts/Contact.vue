<template>
  <div class="container">
    <button @click.prevent="showModel">Show Dialog</button>
    <modal dismissable>
      <div class="bg-white w-96 grid p-5 rounded-md space-y-2">
        <p class="font-bold text-lg">Add Type</p>
        <input type="text" class="rounded border p-1" placeholder="Name" />
        <input type="text" class="rounded border p-1" placeholder="Type" />
        <textarea class="rounded border p-1" placeholder="Description" />
        <div class="grid grid-cols-3 space-x-2 pt-3">
          <button
            type="submit"
            @click="onCancel"
            class="rounded shadow-md text-white border-none p-1 bg-red-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="rounded shadow-md text-white border-none p-1 bg-blue-600 col-span-2"
          >
            Save
          </button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { inject } from "vue";
import Modal from "../components/indicators/Modal.vue";
export default {
  components: { Modal },
  setup() {
    const { show, onCancel } = inject("DIALOG_PROVIDER");

    const showModel = () => {
      console.log(show.value);
      show.value = !show.value;
    };

    const aa = () => {};
    return {
      show,
      aa,
      onCancel,
      showModel,
    };
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  margin: 0 auto;
}
</style>
