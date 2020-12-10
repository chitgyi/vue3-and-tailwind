import { ref } from "vue"

export default function useDialog() {
    const show = ref(false);

    const onCancel = () => {
        show.value = false;
    }

    return { show, onCancel };
}