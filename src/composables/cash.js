import {  watch, ref } from "vue";

export default function useCash() {
    const cashlist = ref([]);
    const search = ref(null);

    const serachResult = ref(null)

    watch(search, (value) => {
        if(value == ""){
            serachResult.value = null; 
        }else{
            // search
            serachResult.value = Array(value.length).fill({
                id: 1,
                name: 'Chit Ye Aung', 
                price: 10000,
                quantity: 1
            });
        }
    })

    const add = (data) => {
        if(cashlist.value.length != 0){
            const cash = cashlist.value.reduce((value)=> value.id == data.id);
            if(cash){
                cash.quantity += 1;
                const index = cashlist.value.indexOf(data);
                cashlist[index] = cash;
            }
        }else{
            cashlist.value.push(data);
        }
        
    }

    const remove = (index) => {
        cashlist.value.splice(index);
    }

    const addQuantity = (index) => {
        cashlist.value[index].quantity += 1;
    }

    const reduceQuantity = (index) => {
        if(cashlist.value[index].quantity <= 1){
            remove(index);
        }else{
            cashlist.value[index].quantity -= 1;
        }
        
    }

    const orderByPrice = (ASC = false) => {
        if (ASC) {
            serachResult.value.sort((a, b) => a.price - b.price);
        } else {
            serachResult.value.sort((a, b) => b.price - a.price);
        }
    };

    const orderByQuantity = (ASC = false) => {
        if (ASC) {
            serachResult.value.sort((a, b) => a.quantity - b.quantity);
        } else {
            serachResult.value.sort((a, b) => b.quantity - a.quantity);
        }
    };

    return {
        cashlist,serachResult, add, addQuantity, reduceQuantity, search, remove, orderByPrice, orderByQuantity
    }
}