import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { login } from '../../feature/signIn';
import { setProfile } from '../../feature/signUp';

import { getDoctor } from '../service/auth.Service';
import { clearMessage } from '../../feature/message';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function SimpleCard() {
  const [captchaError, setcaptchaError] = useState(false);
  const toast = useToast();

  function handlecallbackresponse(response) {
    // console.log("encoded jwt id token:"+response.credential);
  }

  function onChange(value) {
    console.log('Captcha value:', value);
    if (value) {
      setcaptchaError(true);
    }
  }
  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id:
        '102321854344-7hqudjfshv1gjdkcuq367213a13cpctt.apps.googleusercontent.com',
      callback: handlecallbackresponse,
    });
    google.accounts.id.renderButton(document.getElementById('signindiv'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);
  let color1 = useColorModeValue('gray.50', 'gray.800');
  let color2 = useColorModeValue('white', 'gray.700');
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { user: currentUser } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('This field is required!'),
    password: Yup.string().required('This field is required!'),
  });

  const handleLogin = formValue => {
    const { username, password } = formValue;
    setLoading(true);
    dispatch(login({ username, password }))
      .unwrap()
      .then(res => {
        toast({
          title: ` bonne navigation `,
          status: 'success',
          isClosable: true,
        });
      })
      .catch(() => {
        setLoading(false);
        toast({
          title: ` verifer votre username et mot de passe `,
          status: 'error',
          isClosable: true,
        });
      });
  };
  if (currentUser) {
    console.log(currentUser);
    if (currentUser.role.includes('doctor')) {
      return <Navigate to="/doctor" />;
    } else if (currentUser.role.includes('patient')) {
      return <Navigate to="/patient" />;
    }
    else if (currentUser.role.includes('pharmacist')) {
      return <Navigate to="/pharmacist" />;
    }
  }
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={color1}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={color2} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <Form>
                <Field name="username">
                  {({ field, form }) => (
                    <FormControl id="username" isInvalid={form.errors.username}>
                      <FormLabel>Email address</FormLabel>
                      <Input id="username" {...field} />
                      <FormErrorMessage>
                        {form.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, form }) => (
                    <FormControl id="password" isInvalid={form.errors.password}>
                      <FormLabel>Password</FormLabel>
                      <Input type="password" {...field} />
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.400'}>Forgot password?</Link>
                  </Stack>
                  <ReCAPTCHA
                    sitekey="6LeCPvUkAAAAAP7wfhR8Ku8YHgUXdt2Pc1hnAJMO"
                    onChange={onChange}
                  />
                  <div className="app">
                    <div id="signindiv"> </div>
                  </div>
                  {captchaError ? (
                    <Button
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}
                      type="submit"
                    >
                      Sign in
                    </Button>
                  ) : (
                    <Button
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}
                      type="submit"
                      isDisabled={true}
                    >
                      Sign in
                    </Button>
                  )}
                </Stack>
              </Form>
            </Formik>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
