import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormOne } from '../feature/signUp';
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
  HStack,
  Select,
} from '@chakra-ui/react';
import {
  validateName,
  validateEmail,
  validatePassword,
  validateSecondePassword,
  validatePhone,
} from './validationForm';
import { Field, Form, Formik } from 'formik';

//change validateurs

export const Form1 = props => {
  const dispatch = useDispatch();
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
          role: '',
          username: '',
        }}
        onSubmit={(values, actions) => {
          dispatch(
            setFormOne({
              name: values.name,
              LastName: values.LastName,
              email: values.email,
              phone: values.phone,
              password: values.password,
              confirmPassword: values.confirmPassword,
              role: values.role,
              username: values.username,
            })
          );

          props.sendStep(1);
        }}
        validate={values => {
          const errors = {};
          const passwordError = validatePassword(values.password);
          const confirmPasswordError = validateSecondePassword(
            values.password,
            values.confirmPassword
          );

          if (passwordError) {
            errors.password = passwordError;
          }

          if (confirmPasswordError) {
            errors.confirmPassword = confirmPasswordError;
          }

          return errors;
        }}
      >
        {props => (
          <Form>
            <HStack>
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                      First name
                    </FormLabel>
                    <Input
                      id="first-name"
                      placeholder="First name"
                      {...field}
                    />
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
            </HStack>
            {/*username input*/}
            <Field name="username" validate={validateName}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.username && form.touched.username}
                >
                  <FormLabel htmlFor="username" fontWeight={'normal'}>
                    username
                  </FormLabel>
                  <Input id="username" placeholder="username" {...field} />
                  <FormErrorMessage>{form.errors.username}</FormErrorMessage>
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
            <HStack>
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
              <Field name="role">
                {({ field, form }) => (
                  <FormControl colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="role"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: 'gray.50',
                      }}
                    >
                      votre role
                    </FormLabel>
                    <Select
                      id="role"
                      name="role"
                      autoComplete="role"
                      placeholder="Select option"
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={field.value}
                      onChange={field.onChange}
                    >
                      <option value={'patient'}>patient</option>
                      <option value={'doctor'}>doctor</option>
                      <option value={'pharmacist'}>pharmacist</option>
                    </Select>
                  </FormControl>
                )}
              </Field>
            </HStack>
            {/*password input */}
            <HStack>
              <Field name="password">
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

              <Field name="confirmPassword">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.confirmPassword &&
                      form.touched.confirmPassword
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
            </HStack>
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
