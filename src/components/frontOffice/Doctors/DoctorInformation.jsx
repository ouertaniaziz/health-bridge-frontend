import React from 'react';
import {
  Center,
  Box,
  useColorModeValue,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
} from 'react-icons/fa';

const DoctorInformation = ({ user }, ...Rest) => {
  const bgColor1 = useColorModeValue('white', 'gray.900');
  console.log(user, 'this a user');

  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={bgColor1}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
      >
        <Heading size="md">{`${user.username} `}</Heading>
        <Text
          fontSize="sm"
          color="gray.500"
          mb={2}
        >{`Specialité: ${user.speciality}`}</Text>
        <VStack>
          <Stack direction="col" spacing={2} align="center">
            <FaEnvelope />
            <Text fontSize="sm">{user.email}</Text>
          </Stack>
          <Stack direction="col" spacing={2} align="center">
            <FaPhone />
            <Text fontSize="sm" ml="2px">
              {' '}
              {user.phone}
            </Text>
          </Stack>
          <Stack direction="col" spacing={2} align="center">
            <FaMapMarkerAlt />
            {/*     <Text fontSize="sm">{`${user.street}, ${user.state}`}</Text>
             */}
            <Text>Esprit, Ariana</Text>{' '}
          </Stack>
          <Stack direction="col" spacing={2} align="center">
            <FaBirthdayCake />
            <Text fontSize="sm">{user.dateOfBirth}</Text>
          </Stack>
        </VStack>
      </Box>
    </Center>
  );
};

export default DoctorInformation;
