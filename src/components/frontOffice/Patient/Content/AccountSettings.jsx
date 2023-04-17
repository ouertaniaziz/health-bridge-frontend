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
  const [error, setError] = useState('');

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
        onSubmit={(values, actions) => {
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
        <Form>
          <Flex direction={{md:'row'}} gap={{base:'30%',md:'190',md:'50'}} wrap={{base:'wrap',md:'nowrap'}}>
            <HStack w={{base:'100%',lg:'50%',md:'40%'}}>
              <Field name="firstname" >
                {({ field, form }) => (
                  <FormControl w={{base:'100%'}}>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      focusBorderColor="brand.blue"
                      placeholder={patient.firstname}
                      type="text"
                      //value={patient.firstname}
                      name="firstname"
                      // onChange={e => onValueChange(e)}
                      {...field}
                    />
                  </FormControl>
                )}
              </Field>
            </HStack>
            
            <HStack w={{base:'100%',lg:'50%',md:'40%'}}>
              <Field name="lastname">
                {({ field, form }) => (
                  <FormControl id="lastName">
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
                  </FormControl>
                )}
              </Field>
            </HStack>
          </Flex>
          <HStack>
            <Field name="phone">
              {({ field, form }) => (
                <FormControl id="phoneNumber">
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    focusBorderColor="brand.blue"
                    type="tel"
                    placeholder={patient.phone}
                    // value= {props.patient.phone}
                    name="phone"
                    //onChange={e => onValueChange(e)}
                    // value={patient.phone}
                    {...field}
                  />
                </FormControl>
              )}
            </Field>
          </HStack>
          <HStack>
            <Field name="email">
              {({ field, form }) => (
                <FormControl id="emailAddress">
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
                </FormControl>
              )}
            </Field>
          </HStack>
          <HStack>
            <Field name="city">
              {({ field, form }) => (
                <FormControl id="city">
                  <FormLabel>City</FormLabel>
                  <Input
                    focusBorderColor="brand.blue"
                    // value={patient.city}
                    name="city"
                    placeholder={patient.city}
                    // onChange={e => onValueChange(e)}
                    {...field}
                  />
                </FormControl>
              )}
            </Field>
          </HStack>
          <HStack>
            <Field name="postal_code">
              {({ field, form }) => (
                <FormControl id="country">
                  <FormLabel>Code Postal</FormLabel>
                  <Input
                    focusBorderColor="brand.blue"
                    type="number"
                    name="postal_code"
                    // value={patient.postal_code}
                    // onChange={e => onValueChange(e)}
                    {...field}
                  />
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
            <Button type="submit">Update</Button>
          </Box>
        </Form>
      </Formik>
    </Grid>
  );
}

export default AccountSettings;
