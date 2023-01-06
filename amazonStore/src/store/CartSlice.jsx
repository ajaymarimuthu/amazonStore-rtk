import { createSlice } from "@reduxjs/toolkit";

const initialCartState={
    cartProducts:[ 
        //   {
        //     "id": 2,
        //     "title": "Mens Casual Premium Slim Fit T-Shirts ",
        //     "price": 22.3,
        //     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        //     "category": "men's clothing",
        //     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        //     "rating": {
        //         "rate": 4.1,
        //         "count": 259
        //     }
        // }
    ]
 
}

const cartSlice=createSlice({
    name: 'CartItems',
    initialState:initialCartState,
    // initialState:[],


    reducers: {

        addToCart:(state,action)=>{
            // console.log("inside catslice:"+action.payload);
            state.cartProducts.push(action.payload);
        },

        // increaseAmount:(state,action)=>{

        //     state.amount+=action.payload;

        // }

        removeAllItems: (state)=>{


            state.cartProducts=[];



        }

    }
    
})


export default cartSlice.reducer;
export const cartActions=cartSlice.actions;