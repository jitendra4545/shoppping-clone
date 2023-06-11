import { Box, Button, Image, Img, Input, Text,Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverArrow,PopoverCloseButton,PopoverFooter,PopoverBody,ButtonGroup, Tabs, TabList, Tab } from '@chakra-ui/react'
import React, { useState } from 'react'
import {CgProfile} from 'react-icons/cg'
import {ImHeart} from 'react-icons/im'
import {BsSearch,BsCart4} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useMediaQuery } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const link=[
  {"name":"MENS",
"link":"/Men"},
  {"name":"WOMENS",
  "link":"/Women"},
  {"name":"KIDS",
  "link":"/Kid"},
  {"name":"GIFTS",
  "link":"/Gift"},
  {"name":"HOME & KITCHEN",
  "link":"/Homekitchen"},
  {"name":"ELECTRONICS",
  "link":"/Beauty"}

]


export const Navbar = () => {
  const initialFocusRef = React.useRef()
const [Auth, setAuth] = useState(false)
const [isSmall] = useMediaQuery('(min-width: 1430px)')

  return (
    <Box bg='teal.100' p="5px 10px"  h='70px' boxShadow={'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'} > 
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
      <Link to='/'><Box>
        <Image borderRadius={'30px'} w={{base:"30px",md:"40px",lg:"60px"}} src='https://i.postimg.cc/BbcZrkVF/Pink-and-Black-Modern-Initials-Logo-Design.png'  />
      </Box></Link>
<Tabs>
<TabList>

      {
        link.map((el)=>{
return <Link to={el.link} ><Tab borderRadius={'20px'} bg='teal.100' _hover={{'bg':"blue",color:"white"}} ml={{base:0,md:0,lg:6}} fontWeight={'bold'} key={el.name} >
         {el.name}  
            </Tab></Link>
        })
      }
      </TabList>
</Tabs>
      <Box m="0px 30px" display={'flex'}>
            <Input placeholder='Search for products , brands and more ...' mr='5px' border={'3px solid grey'} w={{base:"15rem",md:"16rem",lg:"20rem"}} />
<Button bg='teal.100' _hover={{'bg':"blue",color:"white"}}><BsSearch size={'20px'} /></Button>
      </Box>
      <Box>
      <Box justifyContent={'center'} alignItems={'center'} display={'flex'}  >
           
           <ImHeart  size='20px'/> 
          
      </Box>
      wishlist
      </Box>

      <Box ml='20px'>
      <Box justifyContent={'center'} alignItems={'center'} display={'flex'}  >
           
           <BsCart4  size='20px'/> 
          
      </Box>
     Cart
      </Box>


     
      
       <Popover
      initialFocusRef={initialFocusRef}
      placement='bottom'
      closeOnBlur={false}
    >
      <PopoverTrigger>
      <Box  ml='20px' >
      <Box justifyContent={'center'} alignItems={'center'} display={'flex'} >
           
      <CgProfile size='20px' />
          
      </Box>
      Profile
      </Box>
      
      </PopoverTrigger>
      <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
        <PopoverHeader pt={4} fontWeight='bold' border='0'>
         WELCOME name
         
            

        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Box>
            
          <Image ml='70px' w='50%' src='https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp' />
            <Text  fontWeight={'bold'} mt='10px' >
                 My Account
            </Text>
            <Text  fontWeight={'bold'} mt='10px' >
                 My Orders
                  </Text>
                  <Text  fontWeight={'bold'} mt='10px' >
                     Login As Admin                  
                  </Text>
                  <Text>
                  
                  </Text>
                  <Text>
                  
                  </Text>
          </Box>
        </PopoverBody>
        <PopoverFooter
          border='0'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          pb={4}
        >
          
          
          <Link to='/userlogin' >  <Button colorScheme='green'>LogIn</Button></Link>
           
        
        </PopoverFooter>
      </PopoverContent>
    </Popover>
       


    </Box>
        
    </Box>
  )
}
