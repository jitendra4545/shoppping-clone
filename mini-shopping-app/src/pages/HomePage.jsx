import { Box, Heading, Image } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Navbar } from '../components/Navbar'




const banners = [
  "https://cdn.shopclues.com/images/banners/2023/May/05/Intel_Gaming_Web_4May23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/May/05/HB4_JDD_Web_Esha_5thMay23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/May/17/HB3_Puma_Web_SYM_17May23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/May/19/Fun-tasticFridayDeals_Web_SYM_19May23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/May/05/HB2_RefurbMobile_Web_SYM_05May23.jpg"
]

export const HomePage = () => {
  const [int, setint] = useState(null)
  const [count, setcount] = useState(0)
  const handleNext = () => {
    setcount((prevIndex) => (prevIndex + 1) % banners.length)
  }
  useEffect(() => {
    setint(setInterval(handleNext, 4000))
  }, [])

  console.log(int,"abcd", banners[count])






  return (
    <Box>
      <Box display={"flex"}>
        <Image w='auto' src={banners[count]} />
        
      </Box>
    </Box>
  )
}
