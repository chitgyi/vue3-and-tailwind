import { reactive, toRefs } from 'vue'

export default function usePost() {
    const state = reactive({ posts: null, loading: false, errorMessage: null });

    const fetchPost = async () => {
        try {
            if (state.posts) {
                return;
            }
            state.loading = true;
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            state.posts = await response.json();
            state.loading = false;
        } catch (error) {
            state.loading = false;
            state.errorMessage = error;
        }
    };

    const onDelete = (index) => {
        state.posts.splice(index, 1);
    }

    return {
        ...toRefs(state),
        fetchPost,
        onDelete
    };
}