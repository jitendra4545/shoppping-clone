import { Box, Button, Image, Img, Input } from '@chakra-ui/react'
import React from 'react'

const link=[
  {"name":"MENS"},
  {"name":"WOMENS"},
  {"name":"KIDS"},
  {"name":"GIFTS"},
  {"name":"HOME & KITCHEN"}

]


export const Navbar = () => {

  
  return (
    <Box bg='teal.100' p="5px 10px"  h='70px' boxShadow={'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'} > 
      <Box display={'flex'} >
      <Box>
        <Image borderRadius={'30px'} w='60px' src='https://i.postimg.cc/BbcZrkVF/Pink-and-Black-Modern-Initials-Logo-Design.png'  />
      </Box>
<Box>


      {
        link.map((el)=>{
return <Button key={el.name} >
         {el.name}  
            </Button>
        })
      }
</Box>
      <Box>
            <Input  />
      </Box>
      <Box>
               wishlist profile
      </Box>
      </Box>

      {/*  */}
        
    </Box>
  )
}
