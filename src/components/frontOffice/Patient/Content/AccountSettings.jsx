import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  HStack,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatepatient, updatepatientdetails } from '../../feature/patient';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

function AccountSettings(props) {
  const patient = useSelector(state => state.patient.value);
  const dispatch = useDispatch();
  // const onValueChange = e => {
  //   // setProduct({ ...product, [e.target.name]: e.target.value });
  //   setError('Length required');
  //   const newValue = e.target.value;
  //   dispatch(updatepatient({ fieldName: [e.target.name], value: newValue }));
  // };
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, 'First name must be at least 2 characters')
      .max(20, 'First name cannot exceed 20 characters')
      .required('First name is required'),
    lastname: Yup.string()
      .min(2, 'Last name must be at least 2 characters')
      .max(20, 'Last name cannot exceed 20 characters')
      .required('Last name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required')
      .min(2, 'Email must be at least 2 characters')
      .max(100, 'Email cannot exceed 100 characters'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(
        /^(20|21|22|23|24|25|26|27|28|29|50|51|52|53|54|55|56|90|91|92|93|94|95|96|97|98|99)\d{6}$/,
        'Invalid phone number'
      ),
    city: Yup.string()
      .required('City is required')
      .min(2, 'City must be at least 2 characters')
      .max(50, 'City cannot exceed 50 characters'),
    postal_code: Yup.number()
      .required('Postal code is required')
      .min(1000, 'Postal code must be between 1000 and 9999')
      .max(9999, 'Postal code must be between 1000 and 9999'),
  });
  

  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)' }}
      gap={6}
    >
      <Formik
        enableReinitialize={true}
        initialValues={{
          firstname: patient.firstname,
          lastname: patient.lastname,
          email: patient.email,
          phone: patient.phone,
          city: patient.city,
          postal_code: patient.postal_code,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log('submitted');
          dispatch(
            updatepatientdetails({
              firstname: values.firstname,
              lastname: values.lastname,
              email: values.email,
              phone: values.phone,
              city: values.city,
              postal_code: values.postal_code,
            })
          );
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Flex
              direction={{ md: 'row' }}
              gap={{ base: '30%', md: '190', md: '50' }}
              wrap={{ base: 'wrap', md: 'nowrap' }}
            >
              <HStack w={{ base: '100%', lg: '50%', md: '40%' }}>
                <Field name="firstname">
                  {({ field, form }) => (
                    <FormControl
                      w={{ base: '100%' }}
                      isInvalid={
                        form.errors.firstname && form.touched.firstname
                      }
                    >
                      <FormLabel>First Name</FormLabel>
                      <Input
                        focusBorderColor="brand.blue"
                        type="text"
                        //value={patient.firstname}
                        name="firstname"
                        {...field}
                      />
                      <FormErrorMessage>
                        {form.errors.firstname}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </HStack>

              <HStack w={{ base: '100%', lg: '50%', md: '40%' }}>
                <Field name="lastname">
                  {({ field, form }) => (
                    <FormControl
                      id="lastname"
                      isInvalid={form.errors.lastname && form.touched.lastname}
                    >
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        focusBorderColor="brand.blue"
                        type="text"
                        placeholder={patient.lastname}
                        name="lastname"
                        // value={patient.lastname}
                        // onChange={e => onValueChange(e)}
                        {...field}
                      />
                      <FormErrorMessage>
                        {form.errors.lastname}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </HStack>
            </Flex>
            <HStack>
              <Field name="phone">
                {({ field, form }) => (
                  <FormControl
                    id="phoneNumber"
                    isInvalid={form.errors.phone && form.touched.phone}
                  >
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      focusBorderColor="brand.blue"
                      type="tel"
                      // value= {props.patient.phone}
                      name="phone"
                      //onChange={e => onValueChange(e)}
                      // value={patient.phone}
                      {...field}
                    />
                    <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </HStack>
            <HStack>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    id="emailAddress"
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      focusBorderColor="brand.blue"
                      type="email"
                      placeholder={patient.email}
                      // value={patient.email}
                      name="email"
                      // onChange={e => onValueChange(e)}
                      {...field}
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </HStack>
            <HStack>
              <Field name="city">
                {({ field, form, isvalid }) => (
                  <FormControl
                    id="city"
                    isInvalid={form.errors.city && form.touched.city}
                  >
                    <FormLabel>City</FormLabel>
                    <Input
                      focusBorderColor="brand.blue"
                      // value={patient.city}
                      name="city"
                      placeholder={patient.city}
                      // onChange={e => onValueChange(e)}
                      {...field}
                    />{' '}
                    <FormErrorMessage>{form.errors.city}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </HStack>
            <HStack>
              <Field name="postal_code">
                {({ field, form }) => (
                  <FormControl
                    id="country"
                    isInvalid={
                      form.errors.postal_code && form.touched.postal_code
                    }
                  >
                    <FormLabel>Code Postal</FormLabel>
                    <Input
                      focusBorderColor="brand.blue"
                      type="number"
                      name="postal_code"
                      // value={patient.postal_code}
                      // onChange={e => onValueChange(e)}
                      {...field}
                    />{' '}
                    <FormErrorMessage>
                      {form.errors.postal_code}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </HStack>
            <Box
              mt={5}
              py={5}
              px={8}
              borderTopWidth={1}
              borderColor="brand.light"
            >
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                style={{
                  opacity: !isValid ? 0.5 : 1,
                  pointerEvents: !isValid ? 'none' : 'auto',
                }}
              >
                Update
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}

export default AccountSettings;
