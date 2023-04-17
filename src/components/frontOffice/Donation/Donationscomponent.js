import React, { useState } from 'react';
import { Box, Button, Container, Flex, Heading, Image, Stack, chakra, useColorModeValue } from '@chakra-ui/react';
import Donationimage from '../../../assets/donationimage.jpg';
import { HStack, VStack } from '@chakra-ui/react';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { Center, Square, Circle } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Donationadd from './Donationadd';

const Donationcomponent = () => {
  // const [test, setTest] = useState(null);

  // const handleTestChange = (event) => {
  //   setTest(event.target.value);
  // };

  return (
    <>
      <Box textAlign="center" my="8">
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
          <chakra.h3
            fontFamily={'Dancing Script'}
            fontWeight={'bold'}
            fontSize={40}
            color={'#004AAD'}
          >
            Your donation can provide hope and help to those in need. 
          </chakra.h3>
          <chakra.h4
            fontSize={35}
            fontFamily={'sans-serif'}
            color={useColorModeValue('#5CE1E6', '367DDD')}
          >
            Donate today!
          </chakra.h4>
        </Box>
      </Box>
      <Container maxW="sm" mt="6" ml="80">
        <Flex direction={{ base: 'column-reverse', xl: 'row' }}>
          <Box flex={6} textAlign={{ base: 'center', md: 'left' }}>
            <Heading as="h3" size="md" mb={{ base: 20, md: 5 }}>
              {/* Heading content */}
            </Heading>
            <Stack direction="column" spacing="10">
              <div col="md-3"> </div>
              <Button as={Link} to="/register" size="md" height="48px" width="200px" borderWidth="2px" colorScheme="blue" mt="4">
                Register
              </Button>
              <Button as={Link} to="/available-medications" size="md" height="48px" width="200px" borderWidth="2px" colorScheme="blue" mt="4">
                Available medications
              </Button>
              <Button as={Link} to="/available-materials" size="md" height="48px" width="200px" borderWidth="2px" colorScheme="blue" mt="4">
                Available materials
              </Button>
              {/* <Donationadd test={test} handleTestChange={handleTestChange} /> */}
            </Stack>
          </Box>
          <Box flex={{ base: 1, md: 6 }} ml={{ base: 0, md: 8 }} mt={{ base: 8, md: 0 }}>
            <Image src={Donationimage} alt="Donation Image" borderRadius="md" maxHeight="11000px" maxWidth="650px" />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Donationcomponent;