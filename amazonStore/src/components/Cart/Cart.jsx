import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Cart.css';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux'
import { cartActions } from '../../store/CartSlice';

import cartImage from "../../images/cartimage.png"


function Cart() {

  const cartProducts = useSelector(state => state.cart.cartProducts);
  
  const count = useSelector(state => state.cart.count);

  const dispatch = useDispatch();

  // console.log(cartProducts);
  // console.log("Hii");


  return (

    // <></>









    <div className="cart">

 

      <div className="cart-header">

        {cartProducts.length === 0 ? null:   <h2>CartItems</h2>}
       
        <div>
          {cartProducts.length === 0 ?
            null :
            <button className='cart-btn' onClick={() => dispatch(cartActions.removeAllItems())}>Clear Cart</button>}


        </div>

      </div>


      <div className="cart-items">

        {cartProducts.length === 0 ? <img src={cartImage} /> :

          cartProducts.map((p) => {

            return <Card key={p.id} sx={{ maxWidth: 300 }} className="cart-card" >

              <CardActionArea >
                <CardMedia


                  component="img"
                  height="300"
                  image={p.image}

                  sx={{ maxWidth: 250 }}
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

                  <Typography variant="body2" color="text.secondary">

                    <div>Count: {count}</div>
                    </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className='cart-productcomponent-button'>

              </CardActions>

            </Card>


          })
        }

      </div>

      {/* <div>
        {cartProducts.length === 0 ?
          null :
          <button className='cart-btn' onClick={() => dispatch(cartActions.removeAllItems())}>Clear Cart</button>}


      </div> */}









    </div>



  )
}

export default Cart





// {cartProducts.map((p) => {

//   <Card key={p.id} sx={{ maxWidth: 300 }} className="card">

//     <CardActionArea >
//       <CardMedia
//         className='media'

//         component="img"
//         height="250"
//         image={p.image}

//         sx={{ maxWidth: 190 }}
//         alt="green iguana"
//       />
//       {/* <ProductImage img={p.image}/> */}
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {p.title.substring(0, 20)}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {p.category}

//         </Typography>
//         <Typography variant="body2" color="text.secondary">

//           {p.price}
//         </Typography>
//       </CardContent>
//     </CardActionArea>
//     <CardActions className='productcomponent-button'>
//       <Button size="small"
//         // onClick={(p)=> handelAddToCart(p)}
//         onClick={() => dispatch(cartActions.addToCart(p))}
//         className='button-btn' >
//         {/* <Link to={`/product/${p.id}`}  > */}

//         Add to Cart
//         {/* <Button>  Add to Cart</Button> */}

//         {/* </Link> */}
//       </Button>
//     </CardActions>

//   </Card>


// })}