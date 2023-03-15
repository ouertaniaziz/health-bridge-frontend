//imports
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../config/axios';
export const Emailverificiation = () => {
const {token}=useParams();
    
    
useEffect(()=>{
    
    let obj={
        emailtoken:token
    }
    //console.log(JSON.stringify())
    axiosInstance.post("/verify-email",obj)
    
})
  return (
    <Stack minH={'75vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex pt={'120px'} flex={1} align={'center'} justify={'center'}  >
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}
            >
               Email Verification
            </Text>
              
            
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            
          Your email has been successfully verified and your account is now active. You can now access all of the features on our platform.
           you have any questions or need assistance, please don't hesitate to contact us at 
              
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} >
            <Button 
                as={"a"}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              href={"/signIn"}
              _hover={{
                bg: 'blue.500',
              }}
            >
                Login 
            </Button>
            
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} pr={{md :'100px'}} boxSize={{base:'50hv',md:'60vh',lg:'75vh'}}>
        <Image src='mail.png'></Image>
       
        
      </Flex>
    </Stack>
  );
};
