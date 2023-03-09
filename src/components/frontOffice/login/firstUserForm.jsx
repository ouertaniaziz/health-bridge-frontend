import React, { useState } from 'react';
import {
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  FormHelperText,
  InputRightElement,
  FormErrorMessage,
  ButtonGroup,
} from '@chakra-ui/react';
import {
  validateName,
  validateEmail,
  validatePassword,
  validateSecondePassword,
  validatePhone,
} from './validationForm';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';

//change validateurs

export const Form1 = props => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      {/*first name and last name input */}
      <Formik
        initialValues={{
          name: '',
          LastName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
        }}
        
        onSubmit={(values, actions) => {
          // submitForm(values);
          props.sendData(JSON.stringify(values, null, 2));
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {props => (
          <Form>
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                    First name
                  </FormLabel>
                  <Input id="first-name" placeholder="First name" {...field} />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            {/* */}
            <Field name="LastName" validate={validateName}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.LastName && form.touched.LastName}
                >
                  <FormLabel htmlFor="LastName" fontWeight={'normal'}>
                    Laste name
                  </FormLabel>
                  <Input id="Last-name" placeholder="Last Name" {...field} />
                  <FormErrorMessage>{form.errors.LastName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            {/*email input */}

            <Field name="email" validate={validateEmail}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="email" fontWeight={'normal'}>
                    Email
                  </FormLabel>
                  <Input
                    id="email"
                    placeholder="put your email here "
                    {...field}
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
              )}
            </Field>

            {/*phone input */}

            <Field name="phone" validate={validatePhone}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.phone && form.touched.phone}
                >
                  <FormLabel htmlFor="phone" fontWeight={'normal'}>
                    Phone
                  </FormLabel>
                  <Input id="phone" {...field} />
                  <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            {/*password input */}

            <Field name="password" validate={validatePassword}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel htmlFor="password" fontWeight={'normal'}>
                    Password
                  </FormLabel>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={show ? 'text' : 'password'}
                      placeholder="Enter password"
                      {...field}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            {/*confirm password input */}

            <Field name="confirmPassword" validate={validateSecondePassword}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.confirmPassword && form.touched.confirmPassword
                  }
                >
                  <FormLabel htmlFor="confirmPassword" fontWeight={'normal'}>
                    Confirm Password
                  </FormLabel>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={show ? 'text' : 'password'}
                      placeholder="Enter password"
                      {...field}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {form.errors.confirmPassword}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <ButtonGroup mt="5%" w="100%">
              <Flex w="100%" justifyContent="space-between">
                <Flex>
                  <Button
                    isDisabled={true}
                    colorScheme="teal"
                    variant="solid"
                    w="7rem"
                    mr="5%"
                  >
                    Back
                  </Button>
                  <Button
                    w="7rem"
                    isDisabled={false}
                    colorScheme="teal"
                    variant="outline"
                    type="submit"
                  >
                    Next
                  </Button>
                </Flex>
              </Flex>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    </>
  );
};
