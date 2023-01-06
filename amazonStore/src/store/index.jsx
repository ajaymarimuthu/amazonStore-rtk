import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './HomeSlice'

import CartReducer from './CartSlice'
import ProductReducer from './SelectedProductSlice'



const store=configureStore({

    reducer:{
        home:homeReducer,
        cart:CartReducer,
        product:ProductReducer

    }


})

export default store;