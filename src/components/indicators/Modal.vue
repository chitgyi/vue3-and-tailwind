<template>
  <div
    class="flex absolute justify-center items-center inset-0 bg-opacity-30 bg-black"
    :class="{ hidden: !isShown }"
    @click.self="onDismiss"
  >
    <slot />
  </div>
</template>

<script>
import { inject, onUnmounted, toRef } from "vue";

export default {
  props: {
    show: Boolean,
    dismissable: Boolean,
  },
  setup(props) {
    const isDismissable = toRef(props, "dismissable");
    const { show, onCancel } = inject("DIALOG_PROVIDER");

    const onDismiss = () => {
      if (isDismissable.value) {
        show.value = false;
      }
    };

    onUnmounted(() => (show.value = false));

    return { isShown: show, onCancel, onDismiss };
  },
};
</script>

<style lang="scss" scoped></style>
