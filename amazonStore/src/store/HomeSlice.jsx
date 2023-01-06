import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const Products_URL ='https://fakestoreapi.com/products';


const initialHomeState={ 
    loading:false,
    error:'',
    products:[],
    

}


export const fetchProducts= createAsyncThunk('products/fetchProducts', async()=>{
    const response=await axios.get(Products_URL);
    // console.log(response.data);
    return response.data;
})


 


const homeSlice=createSlice({

    name:'homeItems',
    initialState:initialHomeState,

    extraReducers: (builder) =>{

        builder.addCase(fetchProducts.pending, (state) =>{
            state.loading=true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) =>{
            state.loading=true
            state.products=action.payload
            state.error=''
        })
        builder.addCase(fetchProducts.rejected, (state, action) =>{
            state.loading=false
            state.products=[]
            state.error=action.error.message
        })

    }

})

export default homeSlice.reducer;
export const homeActions=homeSlice.actions;




        //  {
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
          
        // {
        //     "id": 3,
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