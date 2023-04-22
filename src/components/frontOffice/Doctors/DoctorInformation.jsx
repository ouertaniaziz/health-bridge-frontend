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
    <Box
      w={'350px'}
      h={'250px'}
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
      <Stack direction="col" ml={'30px'} mb={'10px'}>
        <FaEnvelope />
        <Text fontSize="sm" ml={'30px'}>
          {' '}
          {user.email}
        </Text>
      </Stack>
      <Stack direction="col" ml={'30px'} mb={'10px'}>
        <FaPhone />
        <Text ml={'30px'} fontSize="sm">
          {' '}
          {user.phone}
        </Text>
      </Stack>
      <Stack direction="col" ml={'30px'} mb={'10px'}>
        <FaMapMarkerAlt />
        <Text fontSize="sm">{`${user.street}, ${user.state}`}</Text>
      </Stack>
      <Stack direction="col" ml={'30px'} mb={'10px'}>
        <FaBirthdayCake />
        <Text fontSize="sm" ml={'30px'}>
          {user.dateOfBirth}
        </Text>
      </Stack>
    </Box>
  );
};

export default DoctorInformation;
