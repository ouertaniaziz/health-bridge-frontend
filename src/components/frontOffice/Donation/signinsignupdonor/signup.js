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
  GridItem, Select,
  
} from '@chakra-ui/react';

import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


import { Link, useNavigate } from 'react-router-dom';

import Signin from './Signin';
import MaterialForm from'../MaterialForm';
import MedicationForm from '../MedicationForm';

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  
  const navigate = useNavigate();
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  
  
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the form from submitting

    if (selectedOption === 'materials') {
      navigate('/MaterialForm');
    } else if (selectedOption === 'medications') {
      navigate('/MedicationForm');
    }
  };




  return (
    <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to make a diffrence ✌️
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
                <FormControl id="Name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="FirstName">
                  <FormLabel>FirstName</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              
            </HStack>
            
              <Box>
                <FormControl id="LaststName">
                  <FormLabel>LastName</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="address">
                  <FormLabel>Address</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            <FormControl id="email" >
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl as={GridItem} colSpan={[6, 3]}>
      <FormLabel name="type"
        htmlFor="type"
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
          color: 'gray.50',
        }}>
        Donation Type
      </FormLabel>
      <Select
      onChange={handleSelectChange}
      
        id="type"
        name="type"
        autoComplete="type"
        placeholder="Select donationtype"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md">
        <option value="materials">materials</option>
        <option value="medications">medications</option>
        
      </Select>
       {selectedOption === 'materials' && <MaterialForm/>}
    {selectedOption === 'medications' && <MedicationForm/>} 
    </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
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
                }}onSubmit={handleSubmit}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} to ="/Signin">Signin</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

