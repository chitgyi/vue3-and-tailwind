import { ref, watch } from "vue";

export default function usebaseGoods() {
    const search = ref(null)
    const baseGoods = ref([])
    const goodResults = ref([])

    watch(search, (searchString) => {
        if (searchString == '') {
            goodResults.value = baseGoods.value

            // OR

            /// fetch goods api
        } else {
            goodResults.value = baseGoods.value.filter((good) => {
                return good.name.includes(searchString)
            });

            /// OR ///

            // Call serach from server
        }
    });

    const onEdit = (index, data) => {
        // to do
        ///call api to update and then updata local data if successed
        goodResults.value[index] = data

    }

    const onDelete = (index) => {
        //to do
        //call api to delete and then refresh local data
        goodResults.value.splice(index, 1)

    }

    const loadGoods = () => {
        /// fetch gooods API 

        /// OR

        /// MOCK DATA
        if (baseGoods.value.length == 0) {
            Array(20)
                .fill(0)
                .forEach((_, index) => {
                    baseGoods.value.push({
                        name: `similique incidunt eos maxime porro! ${index}`,
                        id: index,
                        price: index * 1000,
                        quantity: index + Math.floor((Math.random() * 10) + 1),
                    });
                });
            goodResults.value = baseGoods.value
        }
    }

    return {
        search, goods: goodResults, loadGoods, onEdit, onDelete
    }
}