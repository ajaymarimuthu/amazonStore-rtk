import { createSlice } from "@reduxjs/toolkit";

const initialSelectedProducts={
    selectedProducts:[]
}


const productSlice=createSlice({
    name:'selectedProduct',
    initialState:initialSelectedProducts,
    reducers: {
        addSelectedProduct:(state,action)=>{

            console.log("in selectedproduct action");

            state.selectedProducts.push(action.payload)

        },


        // removeSelectedProduct(){

        // }
    }

})

export default productSlice.reducer;

export const productActions=productSlice.actions;

