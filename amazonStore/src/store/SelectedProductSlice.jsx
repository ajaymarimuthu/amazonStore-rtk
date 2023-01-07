import { createSlice } from "@reduxjs/toolkit";

const initialSelectedProducts={
    selectedProducts:[]
}


const productSlice=createSlice({
    name:'selectedProduct',
    initialState:initialSelectedProducts,
    reducers: {
        addSelectedProduct:(state,action)=>{

          

            state.selectedProducts.push(action.payload)

        },


        removeSelectedProduct:(state)=>{

            state.selectedProducts=[]
            
        }
    }

})

export default productSlice.reducer;

export const productActions=productSlice.actions;

