import { Box, Button, Image, Img, Input, Text,Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverArrow,PopoverCloseButton,PopoverFooter,PopoverBody,ButtonGroup } from '@chakra-ui/react'
import React, { useState } from 'react'
import {CgProfile} from 'react-icons/cg'
import {ImHeart} from 'react-icons/im'
import {BsSearch,BsCart4} from 'react-icons/bs'
import { useSelector } from 'react-redux'
//import { useDisclosure } from '@chakra-ui/react'
const link=[
  {"name":"MENS"},
  {"name":"WOMENS"},
  {"name":"KIDS"},
  {"name":"GIFTS"},
  {"name":"HOME & KITCHEN"},
  {"name":"BEAUTY"}

]


export const Navbar = () => {
  const initialFocusRef = React.useRef()
const [Auth, setAuth] = useState(false)
//   const is_Active=useSelector(store=>store.AuthReducer)

// console.log(is_Active)
  
  return (
    <Box bg='teal.100' p="5px 10px"  h='70px' boxShadow={'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'} > 
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
      <Box>
        <Image borderRadius={'30px'} w='60px' src='https://i.postimg.cc/BbcZrkVF/Pink-and-Black-Modern-Initials-Logo-Design.png'  />
      </Box>
<Box>


      {
        link.map((el)=>{
return <Button bg='teal.100' _hover={{'bg':"blue",color:"white"}} ml={'8'} key={el.name} >
         {el.name}  
            </Button>
        })
      }
</Box>
      <Box m="0px 30px" display={'flex'}>
            <Input placeholder='Search for products , brands and more ...' mr='5px' border={'3px solid grey'} w='20rem' />
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
         WELCOME
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Box>
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
          
          <ButtonGroup size='sm'>
            <Button colorScheme='green'>Setup Email</Button>
            <Button colorScheme='blue' ref={initialFocusRef}>
              Next
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
       


    </Box>
        
    </Box>
  )
}
