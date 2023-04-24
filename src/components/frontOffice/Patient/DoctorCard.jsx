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
import { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DoctorCard = ({ doctor }, ...Rest) => {
  const navigate = useNavigate();
  const bgColor1 = useColorModeValue('white', 'gray.900');
  const bgColor2 = useColorModeValue('gray.700', 'gray.900');
  const bookAppoiment = e => {
    e.preventDefault();
    navigate(`/patient/notification/${doctor._id}`);
  };
  useEffect(() => {
    console.log(doctor);
  });
  if (Object.keys(doctor).length === 0) {
    return <Box>wait....</Box>;
  } else {
    let about;
    if (typeof doctor.aboutMe === 'string') {
      about = doctor.aboutMe.slice(0, 90);
    } else {
      console.log('str is not a string');
    }
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
            {doctor.user.firstname} {doctor.user.username}
          </Heading>
          <Text
            fontSize="sm"
            color="gray.500"
            mb={2}
          >{`Specialité: ${doctor.user.speciality}`}</Text>
          <Text
            fontSize="sm"
            color="gray.500"
            mb={2}
          >{`location: ${doctor.user.state}`}</Text>
          <Text textAlign={'center'} color={bgColor2} px={3}>
            {about}...
          </Text>
          <Box>
            <Button
              px={4}
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
              }}
              onClick={e => {
                bookAppoiment(e);
              }}
            >
              Book Appoiment
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }
};

export default DoctorCard;
