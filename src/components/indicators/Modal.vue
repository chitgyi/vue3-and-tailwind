<template>
  <div
    class="flex fixed justify-center items-center inset-0 bg-opacity-30 bg-black pl-0"
    :class="{
      hidden: !isShown,
      'md:pl-0': isCollepsedSlideBar,
      'md:pl-44': !isCollepsedSlideBar,
    }"
    @click.self="onDismiss"
  >
    <slot />
  </div>
</template>

<script>
import { inject, onUnmounted, toRef } from "vue";

export default {
  props: {
    dismissable: Boolean,
  },
  setup(props) {
    const isDismissable = toRef(props, "dismissable");
    const { show, onCancel } = inject("DIALOG_PROVIDER");
    const { isCollepsedSlideBar } = inject("APP_PROVIDER");

    const onDismiss = () => {
      if (isDismissable.value) {
        show.value = false;
      }
    };

    onUnmounted(() => (show.value = false));

    return { isShown: show, onCancel, onDismiss, isCollepsedSlideBar };
  },
};
</script>
