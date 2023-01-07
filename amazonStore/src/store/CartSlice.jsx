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
    ],
    cartItemsCount:0
 
}

const cartSlice=createSlice({
    name: 'CartItems',
    initialState:initialCartState,
   


    reducers: {

        addToCart:(state,action)=>{


            // const value=state.cartProducts.filter((product)=>{

            //     return product.id!== action.payload.id;

            // })
            // state.cartProducts.push(value);


            const dup=state.cartProducts.find((product)=>product.id === action.payload.id);

            

           { dup?state.cartProducts: state.cartProducts.push(action.payload)}
           state.cartItemsCount++;






         
            // 

        }, 

        // increaseAmount:(state,action)=>{
 
        //     state.count+=action.payload;

        // },

        removeAllItems: (state)=>{
 
            state.cartProducts=[],
            state.cartItemsCount=0
 
        }

    }
    
})


export default cartSlice.reducer;
export const cartActions=cartSlice.actions;