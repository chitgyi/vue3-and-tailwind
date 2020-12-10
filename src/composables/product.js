import { reactive, toRefs } from "vue";

export default function useProduct() {
    const state = reactive({ products: null, loading: false, errorMessage: null });

    const fetchProduct = async () => {
        try {
            state.loading = true;
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (response.ok) {
                state.products = await response.json();
                state.loading = false;
            } else {
                throw 'Failed to Loaded';
            }
        } catch (error) {
            state.loading = false;
            state.errorMessage = error;
        }
    };

    const onDelete = (index) => {
        state.products.splice(index, 1);
    };

    return {
        ...toRefs(state),
        fetchProduct,
        onDelete,
    };
}
