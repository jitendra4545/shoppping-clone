import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/AppReducer/action'

export const ProductPage = () => {

  const dispatch = useDispatch()
  const {products}=useSelector(store=>store.AppReducer)
  
  
  useEffect(()=>{
    dispatch(getProduct())
  },[])


  console.log("product",products)

  return (
    <Box>ProductPage</Box>
  )
}
