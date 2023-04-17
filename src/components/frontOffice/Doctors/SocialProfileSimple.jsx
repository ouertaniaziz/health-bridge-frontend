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

export default function SocialProfileSimple({ user }, ...Rest) {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const bgColor1 = useColorModeValue('white', 'gray.900');
  const bgColor2 = useColorModeValue('gray.700', 'gray.900');
  useEffect(() => {
    console.log(user);
  }, [user]);
  if (Object.keys(user).length === 0) {
    return <Box>wait....</Box>;
  } else {
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
            {user.username} {user.lastname}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            {user.email}
          </Text>
          <Text textAlign={'center'} color={bgColor2} px={3}>
            lorem ipsum lorem ipsum lorem ipsu mlorem ips umlore m ipsuml orem
            ipsumlorem i psumlorem ipsumlorem ipsumlorem ipsumlorem
          </Text>
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
            >
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
              }}
            >
              Follow
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }
}
