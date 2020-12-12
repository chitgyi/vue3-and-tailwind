<template>
  <modal dismissable>
    <div class="grid grid-cols-2 space-y-2 w-96 p-2 bg-white rounded-md">
      <input type="text" placeholder="Name" class="col-span-2 p-2 border" />
      <input type="number" placeholder="Goods ID" class="col-span-2 p-2 border" />
      <input type="number" placeholder="Quantity" class="col-span-2 p-2 border" />
      <input type="number" placeholder="Price" class="col-span-2 p-2 border" />
      <button class="col-span-2 bg-blue-600 text-white p-2">Edit</button>
    </div>
  </modal>
</template>

<script>
import Modal from "../../indicators/Modal.vue";
export default {
  components: { Modal },
};
</script>
