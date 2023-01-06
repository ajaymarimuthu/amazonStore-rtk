import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"

// import { AiFillHeart } from 'react-icons/ai';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Home.css'
  
import { fetchProducts } from '../../store/HomeSlice';

// import increaseAmount from '../../store/CartSlice'
import { cartActions } from '../../store/CartSlice';

import { productActions } from '../../store/SelectedProductSlice';

// import {LazyLoadImage} from "react-lazy-load-image-component"
// import "react-lazy-load-image-component/src/effects/blur.css"


import { Link } from "react-router-dom"
import Product from '../Product/Product';
// import ProductImage from './ProductImage';

function Home() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.home);
 

    useEffect(() => {

        dispatch(fetchProducts())
        // console.log(products);


    }, [])

 

    return (
        <div className='home'>

            <h1 className='home-title'>Amazing Products</h1>

            <div className="home-products">
                {products.products.map((p) => {
                    return (

                        <Card key={p.id} sx={{ maxWidth: 300 }} className="card" >

                            {/* <Card key={p.id} sx={{ maxWidth: 300 }} className="card" onClick={()=> console.log(p)}>  */}
                            {/* <h3> Lets go buddy <AiFillHeart className='heart' /> </h3> */}
                            <CardActionArea >
                                <CardMedia
                                    className='media'

                                    component="img"
                                    height="250"
                                    image={p.image}

                                    sx={{ maxWidth: 190 }}
                                    alt="green iguana"
                                />
                                {/* <ProductImage img={p.image}/> */}
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {p.title.substring(0, 20)}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {p.category}

                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        {p.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className='productcomponent-button'>
                                {/* <Button size="small"
                                className="addToCart"
                                onClick={() => dispatch(cartActions.addToCart(p))}
                                      >
                                    Add to Cart
                                </Button> */}

                                <button className='addToCart' onClick={() => dispatch(cartActions.addToCart(p))}>   Add to Cart </button>

                                {/* <Button size="small"
                                    onClick={() => dispatch( productActions.addSelectedProduct(p) )}
                                    className='button-btn' >
                                    ViewProduct
                                </Button> */}

                                
                                {/* <button className='viewProductbtn' onClick={() => dispatch(productActions.addSelectedProduct(p))}>  ViewProduct </button> */}

                                {/* <Link className='viewProductbtn' onClick={() => dispatch(productActions.addSelectedProduct(p))} to={`/product/${p.id}`}>ViewProduct</Link> */}
                                <Link className='viewProductbtn'   to={`/product/${p.id}`}>ViewProduct</Link>

                            </CardActions>
                            {/* <button className='button-btn' onClick={() => dispatch(cartActions.addToCart(p))}> ssss</button> */}

        
                        </Card>

                    )

                })

                }

            </div>





            {/* {products.loading && <div>Loading....</div>}
            {!products.loading && products.error ? <div>Error...{products.error}</div> : null} */}





        </div>
    )
}

export default Home