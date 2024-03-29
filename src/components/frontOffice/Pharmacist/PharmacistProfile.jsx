// import React, { useContext } from 'react';
// import SocialProfileSimple from './SocialProfileSimple';
// import { useSelector } from 'react-redux';
// import { HStack, Box } from '@chakra-ui/react';
// import PharmacistInformation from './PharmacistInformation';
// import { UserContext } from './UserPharmacist'; 



// const PharmacistProfile = () => {
//   const user = useContext(UserContext);
//   if (Object.keys(user).length === 0) {
//     return <Box>wait....</Box>;
//   } else {
//     console.log(user.pharmacist, 'this a pharmacist');

//     return (
//       <>
//         { <HStack
//           flexWrap={{ base: 'wrap', md: 'nowrap' }}
//           flexDirection={{ base: 'column', md: 'row' }}
//         >
//           <SocialProfileSimple user={user.user} pharmacist={user.pharmacist} />
//           <PharmacistInformation user={user.user} />
//         </HStack> }
        
//       </>
//     );
//   }
// };



// export default PharmacistProfile;

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SocialProfileSimple() {
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
             Malek Zlitni     
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @Malek_ZLT
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          As a pharmacist, I am passionate about ensuring that patients receive safe and effective medications to improve their health outcomes.
           With several years of experience in community and hospital pharmacy settings, 
           I have honed my skills in medication management, dispensing, and counseling.{' '}
        
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #medication
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #traitments
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #counseling
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Follow
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}


