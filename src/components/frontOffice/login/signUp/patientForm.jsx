import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Select,
  ButtonGroup,
  Flex,
} from '@chakra-ui/react';

import { addUser } from '../service/auth.Service';

import { useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setFormpatient } from '../../feature/signUp';

const validationSchema = Yup.object().shape({
  dateOfBirth: Yup.date().required('Date of birth is required'),
  sex: Yup.string().required('Sex is required'),
  bloodGroup: Yup.string().required('Blood group is required'),
  medicalHistory: Yup.string(),
  medications: Yup.string(),
  insuranceInformation: Yup.string(),
  symptoms: Yup.string(),
  testResults: Yup.string(),
});

export default function PatienForm(props) {
  const toast = useToast();
  const state = useSelector(state => state.formSignUp.value);
  const handleBack = () => props.sendStep(-1);
  const dispatch = useDispatch();

  return (
    <Box maxW="md" mx="auto">
      <Heading mb="4">Patient Details</Heading>
      <Formik
        initialValues={{
          dateOfBirth: '',
          sex: '',
          bloodGroup: '',
          medicalHistory: '',
          medications: '',
          insuranceInformation: '',
          symptoms: '',
          testResults: '',
        }}
        onSubmit={values => {
          dispatch(
            setFormpatient({
              dateOfBirth: values.dateOfBirth,
              bloodGroup: values.bloodGroup,
              medicalHistory: values.medicalHistory,
              medications: values.medications,
              insuranceInformation: values.insuranceInformation,
              symptoms: values.symptoms,
              testResults: values.testResults,
              sex: values.sex,
            })
          );
          addUser(state);
        }}
        validationSchema={validationSchema}
      >
        {formik => (
          <Form>
            <Grid templateColumns="repeat(2, 1fr)" gap="4">
              <Field name="dateOfBirth">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.dateOfBirth}>
                    <FormLabel htmlFor="dateOfBirth">Date of Birth</FormLabel>
                    <Input type="date" id="dateOfBirth" {...field} />
                    <FormErrorMessage>
                      {form.errors.dateOfBirth}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="sex">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.sex}>
                    <FormLabel htmlFor="sex">Sex</FormLabel>
                    <Select id="sex" {...field}>
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Select>
                    <FormErrorMessage>{form.errors.sex}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="bloodGroup">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.bloodGroup}>
                    <FormLabel htmlFor="bloodGroup">Blood Group</FormLabel>
                    <Select id="bloodGroup" {...field}>
                      <option value="">Select</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </Select>
                    <FormErrorMessage>
                      {form.errors.bloodGroup}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <GridItem colSpan={2}>
                <Field name="medicalHistory">
                  {({ field }) => (
                    <FormControl>
                      <FormLabel htmlFor="medicalHistory">
                        Medical History
                      </FormLabel>
                      <Input
                        id="medicalHistory"
                        placeholder="Enter medical history (if any)"
                        {...field}
                      />
                    </FormControl>
                  )}
                </Field>
              </GridItem>

              <GridItem colSpan={2}>
                <Field name="medications">
                  {({ field }) => (
                    <FormControl>
                      <FormLabel htmlFor="medications">
                        Current Medications
                      </FormLabel>
                      <Input
                        id="medications"
                        placeholder="Enter current medications (if any)"
                        {...field}
                      />
                    </FormControl>
                  )}
                </Field>
              </GridItem>

              <GridItem colSpan={2}>
                <Field name="insuranceInformation">
                  {({ field }) => (
                    <FormControl>
                      <FormLabel htmlFor="insuranceInformation">
                        Insurance Information
                      </FormLabel>
                      <Input
                        id="insuranceInformation"
                        placeholder="Enter insurance information (if any)"
                        {...field}
                      />
                    </FormControl>
                  )}
                </Field>
              </GridItem>

              <GridItem colSpan={2}>
                <Field name="symptoms">
                  {({ field }) => (
                    <FormControl>
                      <FormLabel htmlFor="symptoms">Symptoms</FormLabel>
                      <Input
                        id="symptoms"
                        placeholder="Enter symptoms"
                        {...field}
                      />
                    </FormControl>
                  )}
                </Field>
              </GridItem>

              <GridItem colSpan={2}>
                <Field name="testResults">
                  {({ field }) => (
                    <FormControl>
                      <FormLabel htmlFor="testResults">Test Results</FormLabel>
                      <Input
                        id="testResults"
                        placeholder="Enter test results"
                        {...field}
                      />
                    </FormControl>
                  )}
                </Field>
              </GridItem>
            </Grid>
            <ButtonGroup mt="5%" w="100%">
              <Flex w="100%" justifyContent="space-between">
                <Flex>
                  <Button
                    onClick={handleBack}
                    isDisabled={false}
                    colorScheme="teal"
                    variant="solid"
                    w="7rem"
                    mr="5%"
                  >
                    Back
                  </Button>
                  <Button
                    w="7rem"
                    isDisabled={true}
                    colorScheme="teal"
                    variant="outline"
                  >
                    Next
                  </Button>
                </Flex>

                <Button
                  w="7rem"
                  colorScheme="red"
                  variant="solid"
                  onClick={() => {
                    toast({
                      title: 'Account created.',
                      description: "We've created your account for you.",
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              </Flex>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
