import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect } from 'react';


function onChange(value) {

  console.log("Captcha value:", value);

}




export default function SimpleCard() {
  function handlecallbackresponse(response){
    // console.log("encoded jwt id token:"+response.credential);
      }
    
      useEffect(()=>{
        /*global google */
        google.accounts.id.initialize({
          client_id:"102321854344-7hqudjfshv1gjdkcuq367213a13cpctt.apps.googleusercontent.com",
          callback:handlecallbackresponse
        });
        google.accounts.id.renderButton(
          document.getElementById("signindiv"),{
            theme:"outline",size:"large"
          }
        );
    
      },[]);
  
  
  return (
    
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <ReCAPTCHA

              sitekey="6LeCPvUkAAAAAP7wfhR8Ku8YHgUXdt2Pc1hnAJMO"

              onChange={onChange}


               />


<div className="app"><div id="signindiv"> </div></div>
       
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
             
                 
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
