<template>
  <modal dismissable>
    <div class="grid grid-cols-2 space-y-2 w-96 p-2 bg-white rounded-md">
      <input
        type="text"
        placeholder="Name"
        class="col-span-2 p-2 border"
        v-model="name"
      />
      <input
        type="number"
        placeholder="Quantity"
        class="col-span-2 p-2 border"
        v-model="quantity"
      />
      <input
        type="number"
        placeholder="Price"
        class="col-span-2 p-2 border"
        v-model="price"
      />
      <button
        class="col-span-2 bg-blue-600 text-white p-2"
        @click="onSave({ id, name, price, quantity })"
      >
        Edit
      </button>
    </div>
  </modal>
</template>

<script>
import { ref, toRefs, onUpdated } from "vue";
import Modal from "../../indicators/Modal.vue";
export default {
  props: {
    good: Object,
    onSave: Function,
  },
  components: { Modal },
  setup(props) {
    const { good } = toRefs(props);
    const name = ref(null);
    const price = ref(null);
    const quantity = ref(null);

    onUpdated(() => {
      name.value = good.value.name;
      price.value = good.value.price;
      quantity.value = good.value.quantity;
    });

    return {
      name,
      price,
      quantity,
      id: good.value.id,
    };
  },
};
</script>
