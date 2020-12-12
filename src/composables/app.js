import { ref } from "vue";

export default function useApp() {
    const isCollepsedSlideBar = ref(false);
    const onCollepseSlideBar = () => (isCollepsedSlideBar.value = !isCollepsedSlideBar.value);

    return {
        isCollepsedSlideBar, onCollepseSlideBar
    }
}