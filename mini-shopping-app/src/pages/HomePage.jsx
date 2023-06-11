import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Navbar } from '../components/Navbar'




const banners = [
  "https://cdn.shopclues.com/images/banners/2023/May/05/Intel_Gaming_Web_4May23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/May/05/HB4_JDD_Web_Esha_5thMay23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/May/17/HB3_Puma_Web_SYM_17May23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/May/19/Fun-tasticFridayDeals_Web_SYM_19May23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/May/05/HB2_RefurbMobile_Web_SYM_05May23.jpg"
]

const offers=[
  "https://cdn.shopclues.com/images/banners/2023/June/08/08June_SrushtyBudget_bazzar1.jpg",
  "https://cdn.shopclues.com/images/banners/2023/June/08/08June_SrushtyBudget_bazzar2.jpg",
  "https://cdn.shopclues.com/images/banners/2023/June/08/08June_SrushtyBudget_bazzar3.jpg",
  "https://cdn.shopclues.com/images/banners/2023/June/08/08June_SrushtyBudget_bazzar4.jpg",
  "https://cdn.shopclues.com/images/banners/2023/June/08/08June_SrushtyBudget_bazzar5.jpg"

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
      <Box padding={'0 20px'}>
      <Text padding={'10px 0'} fontWeight={'bold'} fontSize={'25px'} textAlign={'left'} >Budget Bazaar</Text>
      <Box    display={'flex'}  gap={'2'} >
       
       { offers.map((el,i)=>{
         return <Box >
          <Image  src={el} />
         </Box>
        })
      }
      </Box>
      </Box>
    </Box>
  )
}
