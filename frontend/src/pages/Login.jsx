import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  // Image,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';
import axios from "axios"
import { BASE_URL } from '../url/url';

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const toast = useToast()
const navigate = useNavigate()

  const handlelogin = () => {
    const user = {
      email:email,
      password:password
   }
   if(!user.email || !user.password){
        toast({
          title: 'Some field is Empty',
          position:"top-right",
          description: "Please fill all the field",
          status: 'warning',
          duration: 3000,
          isClosable: true,
        })
   }else{
    axios.post(`${BASE_URL}/api/login`,user)
    .then((res) => {
        toast({
          title: 'Login Successfully',
          position:"top-right",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        navigate('/')
        console.log(res.data)
    })
    .catch((err)=> 
        toast({
          title: 'Login failed',
          position:"top-right",
          description: err.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
     )
  }
  
  }

  return (
    // <Stack minH={'100vh'} direction={{ base: 'column', md: 'row'}} bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack pt={20} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Heading Text fontSize={'4xl'}>Sign in </Heading>
      <Flex p={2} flex={1} align={'center'} justify={'center'}  >
     
        <Stack p={10} spacing={4} w={'full'} maxW={'md'} bg={"white"} boxShadow={'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'}>
        
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'} onClick={handlelogin}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      {/* <Flex flex={0.5}>
          <Image
          alt={'Login Image'}
          // objectFit={'cover'}
          src={"https://media.istockphoto.com/id/1494517697/photo/magnifying-glass-with-house-on-computer-keyboard.webp?b=1&s=170667a&w=0&k=20&c=kLihbqMVxA6oLES-t7ug9d0R1iNAgAlLeH6S9awKK44="}
        />
      </Flex> */}
    </Stack>
  );
}


export default Login