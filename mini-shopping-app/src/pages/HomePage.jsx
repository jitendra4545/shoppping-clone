import { Box, Image } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Navbar } from '../components/Navbar'


const banners=[
  {"url":"https://cdn.shopclues.com/images/banners/2023/May/05/Intel_Gaming_Web_4May23.jpg"},
  {"url":"https://cdn.shopclues.com/images/banners/2023/May/05/HB4_JDD_Web_Esha_5thMay23.jpg"},
  {"url":"https://cdn.shopclues.com/images/banners/2023/May/17/HB3_Puma_Web_SYM_17May23.jpg"},
  {"url":"https://cdn.shopclues.com/images/banners/2023/May/19/Fun-tasticFridayDeals_Web_SYM_19May23.jpg"},
  {"url":"https://cdn.shopclues.com/images/banners/2023/May/05/HB2_RefurbMobile_Web_SYM_05May23.jpg"}
]


export const HomePage = () => {
  const ref=useRef(null)
const [count,setcount]=useState(0)
  useEffect(()=>{
   
   
  
  },[])


  console.log(count,banners.length)

  return (
    <Box>
       <Box>
       <Image w='100%' src="https://cdn.shopclues.com/images/banners/2023/May/17/HB3_Puma_Web_SYM_17May23.jpg" />
       </Box>
   </Box>
  )
}
