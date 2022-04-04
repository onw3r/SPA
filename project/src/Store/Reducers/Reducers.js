import {createSlice} from "@reduxjs/toolkit";
import arr from "../../Pages/Catalog/CatalogItems";




const cartSlice = createSlice({
    name: 'store',
    initialState:{
        allWatches:arr,
        basket: [],
        itemPage: null,
        auth:{
            email:null,
            id:null,
            token:null,
        }

    },
    reducers:{
        setItemInBasket: (state, action) => {
            state.basket.push(action.payload)
        },

        deleteItemFromBasket: (state, action) => {
            state.basket = state.basket.filter(Basket => Basket.id !== action.payload)
        },

        setItemPage: (state, action) => {
            state.itemPage = action.payload
        },
        setUser:(state, action) => {
            state.auth.email = action.payload.email;
            state.auth.id = action.payload.id;
            state.auth.token = action.payload.token;
        },
        removeUser:(state) =>{
            state.auth.email = null;
            state.auth.id = null;
            state.auth.token = null;
        }


    }
})

export const { setItemInBasket, deleteItemFromBasket, setItemPage, removeUser, setUser} = cartSlice.actions;
export default cartSlice.reducer;




