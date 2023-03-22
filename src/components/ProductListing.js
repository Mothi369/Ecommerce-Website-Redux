import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
//import { setProducts } from '../redux/actions/productActions'
import {fetchProducts} from  "../redux/actions/productActions"
import ProductComponents from './ProductComponents'


const ProductListing = () => {
  const dispatch=useDispatch()
 /*  const fetchProducts= async ()=>{
    const response= await axios.get("https://fakestoreapi.com/products")
                               .catch(err=>console.log(err))
    dispatch(setProducts(response.data))
    
  } */
  
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <div className='ui grid container'>
        <ProductComponents/>
    </div>
  )
}

export default ProductListing