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
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { GoVerified } from 'react-icons/go';
import { FaEdit } from 'react-icons/fa';
import { verifycin } from './service/patientservice';
import { useDispatch, useSelector } from 'react-redux';
import { setverified } from '../feature/patient';

const PatientDashboard = () => {
  var donee = useSelector(state => state.patient.value.cinverified);

  const dispatch = useDispatch();
  const [cin, setcin] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = JSON.parse(localStorage.getItem('user'));
  const [err, seterr] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

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
  useEffect(() => {}, []);

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
            <Box p="6">
              <Card borderRadius="xl">
                <Avatar
                  size="2xl"
                  name="John Doe"
                  src="https://bit.ly/broken-link"
                />
                <CardBody>
                  <Heading size="md" color="gray.800">
                    John Doe
                  </Heading>
                  <Text color="gray.500" fontSize="lg">
                    Phone: (123) 456-7890
                  </Text>
                  <Text color="gray.500" fontSize="lg">
                    Email: john.doe@example.com
                  </Text>
                  <Spacer mt={4} />
                  <Button
                    leftIcon={<FaEdit />}
                    colorScheme="teal"
                    variant="outline"
                  >
                    Edit Profile
                  </Button>
                </CardBody>
              </Card>
            </Box>
            <Spacer />
            <Box p="6" flex="2">
              <CardBody>
                <Stack spacing="4">
                  <Box>
                    <Text fontWeight="semibold" color="gray.800" fontSize="lg">
                      Address:
                    </Text>
                    <Text color="gray.500" fontSize="lg">
                      123 Main St, Anytown USA
                    </Text>
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" color="gray.800" fontSize="lg">
                      Joined:
                    </Text>
                    <Text color="gray.500" fontSize="lg">
                      01/01/2022
                    </Text>
                  </Box>
                  <Divider />
                  <Box>
                    <Text fontWeight="semibold" color="gray.800" fontSize="lg">
                      About me:
                    </Text>
                    <Text color="gray.500" fontSize="lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed efficitur enim et nisi laoreet bibendum.
                    </Text>
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" color="gray.800" fontSize="lg">
                      Skills:
                    </Text>
                    <HStack spacing="2">
                      <Button size="sm" variant="outline">
                        React
                      </Button>
                      <Button size="sm" variant="outline">
                        JavaScript
                      </Button>
                      <Button size="sm" variant="outline">
                        CSS
                      </Button>
                    </HStack>
                  </Box>
                  <Divider />
                  <Box>
                    <Text fontWeight="semibold" color="gray.800" fontSize="lg">
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
                  </Box>
                </Stack>
              </CardBody>
            </Box>
          </Flex>
        </Card>
      </Box>
    </>
  );
};

export default PatientDashboard;
