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
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from "axios"
import {BASE_URL} from "../url/url"

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [fname,setFname] = useState("")
  const [lname,setLname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const toast = useToast()

const handleClick = () => {
  const user = {
    name:fname+" "+lname,
    email:email,
    password:password
 }
 if(!user.name || !user.email || !user.password){
      toast({
        title: 'Some field is Empty',
        position:"top-right",
        description: "Please fill all the field",
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })
 }else{
  axios.post(`${BASE_URL}/api/register`,user)
  .then((res) => {
      toast({
        title: 'Signup Successfully',
        position:"top-right",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
  })
  .catch((err)=> 
      toast({
        title: 'Registration failed',
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
                  <Input
                    type="text"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleClick}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link href="/login" color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}