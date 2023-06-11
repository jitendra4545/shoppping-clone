import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import {useDispatch,useSelector} from 'react-redux'
   import { userSignup } from '../redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
  export default function UserSignup() {
    const [showPassword, setShowPassword] = useState(false);
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Mobile, setMobile] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    const toast = useToast()
const dispatch=useDispatch()
const navigate=useNavigate()
console.log(Name,Email,Mobile,Password,ConfirmPassword)
    const handleSignup=()=>{
      if(Password==ConfirmPassword){
        dispatch(userSignup(Name,Email,Mobile,Password,ConfirmPassword)).then((res)=>{
          toast({
            title: 'Signup Successful.',
            description: "Please Login Your Account.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          navigate('/userlogin')
        })
      }else{
        toast({
          title: 'Signup Failed.',
          description: "please fill all the credentials and both of the password should match.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
       
      }
     
     
    }


    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool services in Local Mart  ✌️
            </Text>
          </Stack>

          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input onChange={(e)=>setName(e.target.value)} type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Mobile</FormLabel>
                    <Input onChange={(e)=>setMobile(e.target.value)} type="number" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="pssword" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input onChange={(e)=>setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input onChange={(e)=>setConfirmPassword(e.target.value)} type="text" />
              </FormControl>
              <Stack spacing={10} pt={2}>
               <Button
                onClick={handleSignup}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to='/userlogin' color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
