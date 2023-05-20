import { Box, Heading, Image } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Navbar } from '../components/Navbar'




const banners=[
  "https://cdn.shopclues.com/images/banners/2023/May/05/Intel_Gaming_Web_4May23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/May/05/HB4_JDD_Web_Esha_5thMay23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/May/17/HB3_Puma_Web_SYM_17May23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/May/19/Fun-tasticFridayDeals_Web_SYM_19May23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/May/05/HB2_RefurbMobile_Web_SYM_05May23.jpg"
]

export const HomePage = () => {
  const Timeref=useRef(null)
const [count,setcount]=useState(0)
  useEffect(()=>{
    

   if (Timeref.current!==null  ) return 

    Timeref.current=setInterval(()=>{
      setcount((prev)=>{
        if(prev==banners.length-1){
          clearInterval(Timeref.current)
          Timeref.current=null
           setcount(0) 
        } 
       return prev+1
      })
      // console.log("count",count)
    },3000)
  
  
  },[])

  console.log(Timeref,"abcd",count)
  




  
  return (
    <Box>
       <Box>
       <Image w='100%' src={`${banners[count]}`} />
       </Box>
   </Box>
  )
}
