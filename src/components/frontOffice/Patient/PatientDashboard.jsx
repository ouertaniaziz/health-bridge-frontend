import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Center,
  Avatar,
  Heading,
  Divider,
  Text,
  VStack,
  Flex,
  HStack,
  Stack,
  IconButton,
  Icon,
  Card,
  Spacer,
  CardBody,
  Link,
  useColorModeValue,
  Badge,
  Image,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { GoVerified } from 'react-icons/go';
import { FaEdit } from 'react-icons/fa';
import { getpatient, verifycin } from './service/patientservice';
import { useDispatch, useSelector } from 'react-redux';
import { setverified } from '../feature/patient';
import SendNotification from './SendNotification';
import './patient.css';

const PatientDashboard = () => {
  var donee = useSelector(state => state.patient.value.cinverified);
  // var patient = useSelector(state => state.patient.value);
  const [patient, setpatient] = useState();

  const dispatch = useDispatch();
  const [cin, setcin] = useState('');
  const [records, setrecords] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = JSON.parse(localStorage.getItem('user'));
  const [err, seterr] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };
  useEffect(() => {
    async function getUser() {
      const response = await getpatient(user.username);
      const data = await response.user;
      const record = await response.records;
      setrecords(record);
      setpatient(data);
      console.log(records);
    }
    getUser();
  }, []);

  const handleSubmit = async event => {
    setLoading(true);

    event.preventDefault();
    let formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('cin', cin);
    formData.append('username', user.username);
    // Send the formData object to the server using an HTTP request library such as Axios
    let status = await verifycin(formData);

    if (status === true) {
      user.cinverified = true;
      localStorage.setItem('user', JSON.stringify(user));
      seterr(false);
    } else {
      seterr(true);
    }
    setLoading(false);
  };

  return (
    <>
      {user.cinverified === false && (donee === '' || donee === false) ? (
        <Alert
          status="info"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <AlertIcon />
          <Box>
            <AlertTitle>Verify your cin </AlertTitle>
            <AlertDescription>
              Your cin will only be visible to Polyclinics when ur request is
              submitte to them !
            </AlertDescription>
            <br></br>
            <AlertDescription>
              Verifiying your identiy is a must in order for submitting the
              request
            </AlertDescription>
          </Box>
          <Button
            onClick={onOpen}
            leftIcon={<GoVerified />}
            bg="twitter.200"
            mt={{ lg: '20px' }}
          >
            Verify{' '}
          </Button>{' '}
          {/* <AlertDescription maxWidth="sm">
        Thanks for submitting your application. Our team will get back to you
        soon.
      </AlertDescription> */}
        </Alert>
      ) : (
        <div></div>
      )}
      <div>{loading ? <p>Loading...</p> : <></>}</div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Verify your identity </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Cin</FormLabel>
              <Input
                type="number"
                p={{ lg: 1 }}
                onChange={event => setcin(event.target.value)}
              />
              <FormHelperText id="email-helper-text">
                Enter your cin
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Cin Image</FormLabel>
              <Input type="file" p={{ lg: 1 }} onChange={handleFileChange} />
              <FormHelperText id="email-helper-text">
                Take a picture of your identity card and place it in this field
              </FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Spacer />
      {patient ? (
        <Box
          //maxW="xl"
          mx="auto"
          mt="8"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Card>
            <Flex direction={{ base: 'column', md: 'row' }}>
              <Box p={6}>
                <Center py={6}>
                  <Box
                    maxW={'270px'}
                    w={{ lg: '300px', base: '300px' }}
                    bg={'white'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    overflow={'hidden'}
                    ml={{lg:'200px'}}
                  >
                    <Image
                      h={'120px'}
                      w={'full'}
                      src={
                        'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                      }
                      objectFit={'cover'}
                    />
                    <Flex justify={'center'} mt={-12}>
                      <Avatar
                        size={'xl'}
                        src={
                          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                        }
                        alt={'Author'}
                        css={{
                          border: '2px solid white',
                        }}
                      />
                    </Flex>

                    <Box p={6}>
                      <Stack spacing={0} align={'center'} mb={5}>
                        <Heading
                          fontSize={'2xl'}
                          fontWeight={500}
                          fontFamily={'body'}
                        >
                          {patient.firstname} {patient.lastname}
                        </Heading>
                        <Text color={'gray.500'}>{patient.role}</Text>
                      </Stack>

                      <Stack
                        direction={'column'}
                        justify={'center'}
                        spacing={1}
                      >
                        <Stack spacing={0} align={'center'}>
                          <Text fontWeight={600}>phone</Text>
                          <Text fontSize={'sm'} color={'gray.500'}>
                            {patient.phone}
                          </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                          <Text fontWeight={600}>email</Text>
                          <Text fontSize={'sm'} color={'gray.500'}>
                            {patient.email}
                          </Text>
                        </Stack>
                      </Stack>

                      <Button
                        w={'full'}
                        mt={8}
                        bg={'#151f21'}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                          transform: 'translateY(-2px)',
                          boxShadow: 'lg',
                        }}
                      >
                        Request an appointment
                      </Button>
                    </Box>
                  </Box>
                </Center>
              </Box>
              <Spacer />
              <Box p="6" flex="2" pt={{lg:'110px'}}>
                <CardBody>
                  <Stack spacing="4">
                    <Box>
                      <Text
                        fontWeight="semibold"
                        color="gray.800"
                        fontSize="lg"
                      >
                        Address:
                      </Text>
                      <Text color="gray.500" fontSize="lg">
                        {patient.city},{patient.postal_code}
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontWeight="semibold"
                        color="gray.800"
                        fontSize="lg"
                      >
                        Joined:
                      </Text>
                      <Text color="gray.500" fontSize="lg">
                        {patient.creationDate.slice(0, 10)}
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontWeight="semibold"
                        color="gray.800"
                        fontSize="lg"
                      >
                        Gender:
                      </Text>
                      <Text color="gray.500" fontSize="lg">
                        {patient.gender}
                      </Text>
                    </Box>
                    <Divider />
                    {/* <Box>
                      <Text
                        fontWeight="semibold"
                        color="gray.800"
                        fontSize="lg"
                      >
                        About me:
                      </Text>
                      <Text color="gray.500" fontSize="lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed efficitur enim et nisi laoreet bibendum.
                      </Text>
                    </Box> */}
                    <Box>
                      <Text
                        fontWeight="semibold"
                        color="gray.800"
                        fontSize="lg"
                      >
                        Medical records:
                      </Text>
                      <HStack spacing="2">
                        {records ? (
                          records.map(el => (
                            <Button size="sm" variant="outline">{el.filename}</Button>
                          ))
                        ) : (
                          <></>
                        )}
                        {/* <Button size="sm" variant="outline">
                          React
                        </Button> */}
                       
                      </HStack>
                    </Box>
                    <Divider />
                    {/* <Box>
                      <Text
                        fontWeight="semibold"
                        color="gray.800"
                        fontSize="lg"
                      >
                        Interests:
                      </Text>
                      <HStack spacing="2">
                        <Button size="sm" variant="outline">
                          Hiking
                        </Button>
                        <Button size="sm" variant="outline">
                          Cooking
                        </Button>
                        <Button size="sm" variant="outline">
                          Gardening
                        </Button>
                      </HStack>
                    </Box> */}
                  </Stack>
                </CardBody>
              </Box>
            </Flex>
          </Card>
        </Box>
      ) : (
        <div></div>
      )}
      <Box></Box>
    </>
  );
};

export default PatientDashboard;
