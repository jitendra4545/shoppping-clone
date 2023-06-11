import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Navbar } from '../components/Navbar'
import HomePageData from '../asset/HomePageData.json'



const banners = [
  "https://cdn.shopclues.com/images/banners/2023/May/05/Intel_Gaming_Web_4May23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/May/05/HB4_JDD_Web_Esha_5thMay23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/May/17/HB3_Puma_Web_SYM_17May23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/May/19/Fun-tasticFridayDeals_Web_SYM_19May23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/May/05/HB2_RefurbMobile_Web_SYM_05May23.jpg"
]

const offers = [
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








  return (
    <Box>
      <Box  display={"flex"}>
        <Image w='auto' src={banners[count]} />
      </Box>
      <Box padding={'0 20px'}>
      <Box>
          <Text padding={'10px 0'} fontWeight={'bold'} fontSize={'20px'} textAlign={'left'} >Deals Of The Day</Text>
          <Box display={'grid'} gridTemplateColumns={"repeat(6,1fr)"} >

            {HomePageData["DealsOfTheDay"].map((el, i) => {
              return <Box padding={'20px 5px'} _hover={{border:"4px solid skyblue"}}  key={i} >
                <Image w={'70%'} src={el.image} margin={"auto"} />
                <Text noOfLines={1}>{el.title}</Text>
                <Box display={"flex"} justifyContent={'space-evenly'} >
                  <Box><Text>₹{300}</Text></Box>
                  <Box><Text textDecoration={"line-through"} >{el.strike_price}</Text></Box>
                  <Box><Text color={'teal.500'} fontWeight={'bold'} >{el.discount}</Text></Box>
                </Box>
              </Box>
            })
            }
          </Box>
        </Box>

        <Box>
          <Text padding={'10px 0'} fontWeight={'bold'} fontSize={'20px'} textAlign={'left'} >Your Gadget Store</Text>
          <Box display={'grid'} gridTemplateColumns={"repeat(6,1fr)"} >

            {HomePageData["YourGadgetStore"].map((el, i) => {
              return <Box padding={'20px 5px'} _hover={{border:"4px solid skyblue"}}  key={i} >
                <Image w={'70%'} src={el.image} margin={"auto"} />
                <Text noOfLines={1}>{el.title}</Text>
                <Box display={"flex"} justifyContent={'space-evenly'} >
                  <Box><Text>₹{300}</Text></Box>
                  <Box><Text textDecoration={"line-through"} >{el.strike_price}</Text></Box>
                  <Box><Text color={'teal.500'} fontWeight={'bold'} >{el.discount}</Text></Box>
                </Box>
              </Box>
            })
            }
          </Box>
        </Box>

        <Box>
          <Text padding={'10px 0'} fontWeight={'bold'} fontSize={'20px'} textAlign={'left'} >Mens Clothing</Text>
          <Box display={'grid'} gridTemplateColumns={"repeat(6,1fr)"} >

            {HomePageData["MensClothing"].map((el, i) => {
              return <Box padding={'20px 5px'} _hover={{border:"4px solid skyblue"}}  key={i} >
                <Image w={'70%'} src={el.image} margin={"auto"} />
                <Text noOfLines={1}>{el.title}</Text>
                <Box display={"flex"} justifyContent={'space-evenly'} >
                  <Box><Text>₹{300}</Text></Box>
                  <Box><Text textDecoration={"line-through"} >{el.strike_price}</Text></Box>
                  <Box><Text color={'teal.500'} fontWeight={'bold'} >{el.discount}</Text></Box>
                </Box>
              </Box>
            })
            }
          </Box>
        </Box>

        <Box>
          <Text padding={'10px 0'} fontWeight={'bold'} fontSize={'20px'} textAlign={'left'} >Womens Fasion</Text>
          <Box display={'grid'} gridTemplateColumns={"repeat(6,1fr)"} >

            {HomePageData["WomensFasion"].map((el, i) => {
              return <Box padding={'20px 5px'} _hover={{border:"4px solid skyblue"}}  key={i} >
                <Image w={'70%'} src={el.image} margin={"auto"} />
                <Text noOfLines={1}>{el.title}</Text>
                <Box display={"flex"} justifyContent={'space-evenly'} >
                  <Box><Text>₹{300}</Text></Box>
                  <Box><Text textDecoration={"line-through"} >{el.strike_price}</Text></Box>
                  <Box><Text color={'teal.500'} fontWeight={'bold'} >{el.discount}</Text></Box>
                </Box>
              </Box>
            })
            }
          </Box>
        </Box>  


        <Box>
          <Text padding={'10px 0'} fontWeight={'bold'} fontSize={'20px'} textAlign={'left'} >Footwear</Text>
          <Box display={'grid'} gridTemplateColumns={"repeat(6,1fr)"} >

            {HomePageData["Footwear"].map((el, i) => {
              return <Box padding={'20px 5px'} _hover={{border:"4px solid skyblue"}}  key={i} >
                <Image w={'70%'} src={el.image} margin={"auto"} />
                <Text noOfLines={1}>{el.title}</Text>
                <Box display={"flex"} justifyContent={'space-evenly'} >
                  <Box><Text>₹{300}</Text></Box>
                  <Box><Text textDecoration={"line-through"} >{el.strike_price}</Text></Box>
                  <Box><Text color={'teal.500'} fontWeight={'bold'} >{el.discount}</Text></Box>
                </Box>
              </Box>
            })
            }
          </Box>
        </Box>  


        <Box>
          <Text padding={'10px 0'} fontWeight={'bold'} fontSize={'20px'} textAlign={'left'} >Footwear</Text>
          <Box display={'grid'} gridTemplateColumns={"repeat(6,1fr)"} >

            {HomePageData["BrandStore"].map((el, i) => {
              return <Box padding={'20px 5px'} _hover={{border:"4px solid skyblue"}}  key={i} >
                <Image w={'70%'} src={el.image} margin={"auto"} />
                <Text noOfLines={1}>{el.title}</Text>
                <Box display={"flex"} justifyContent={'space-evenly'} >
                  <Box><Text>₹{300}</Text></Box>
                  <Box><Text textDecoration={"line-through"} >{el.strike_price}</Text></Box>
                  <Box><Text color={'teal.500'} fontWeight={'bold'} >{el.discount}</Text></Box>
                </Box>
              </Box>
            })
            }
          </Box>
        </Box>  



//BrandStore


        <Box>
          <Text padding={'10px 0'} fontWeight={'bold'} fontSize={'20px'} textAlign={'left'} >Budget Bazaar</Text>
          <Box display={'flex'} gap={'2'} >

            {offers.map((el, i) => {
              return <Box key={i} >
                <Image src={el} />
              </Box>
            })
            }
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
