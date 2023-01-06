import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { productActions } from '../../store/SelectedProductSlice';
import { useSelector } from 'react-redux';

 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
 
 


function Product() {
  const { productId } = useParams();
  const product = useSelector(state => state.product.selectedProducts)

  // console.log(productId);
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {

    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
      console.log("Error is :", err);
    })

    dispatch(productActions.addSelectedProduct(response.data))


  }

  useEffect(() => {


    if (productId && productId !== "") {
      fetchProductDetail();
    }


  }, [productId])




  const oneProduct = product.map((p) => {
    return <Card key={p.id} sx={{ maxWidth: 300 }} className="cart-card" >

      <CardActionArea >
        <CardMedia


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
      <CardActions className='cart-productcomponent-button'>

      </CardActions>

    </Card>
  })

  return (
    <div>
      {oneProduct}
    </div>
  )
}

export default Product