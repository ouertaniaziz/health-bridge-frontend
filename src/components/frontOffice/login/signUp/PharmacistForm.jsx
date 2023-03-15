import { useToast } from '@chakra-ui/react';
import { addUser } from '../service/auth.Service';
import { setForm, setFormpharmacist } from '../../feature/signUp';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import{
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

export const PharmacistForm = (props) => {
  const toast = useToast();
  const state = useSelector(state => state.formSignUp.value);
  const handleBack = () => props.sendStep(-1);
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    dateOfBirth: Yup.date().required('Date of birth is required'),
    sex: Yup.string().required('Sex is required'),
    pharmacie: Yup.string().required('pharmacy is required'),
    insuranceInformation: Yup.string()
  });
  return (
    <Box maxW="md" mx="auto">
    <Heading mb="4">Pharmacist Details</Heading>
    <Formik
      initialValues={{
        dateOfBirth: '',
        sex: '',
        pharmacie:'',
        insuranceInformation: '',

      }}
      onSubmit={values => {
        dispatch(
          setFormpharmacist({
            dateOfBirth: values.dateOfBirth,
            sex:values.sex,
            pharmacie: values.pharmacie,
            insuranceInformation: values.insuranceInformation
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

           

            <GridItem colSpan={2}>
              <Field name="pharmacie">
                {({ field }) => (
                  <FormControl>
                    <FormLabel htmlFor="pharmacie">
                      Pharmacie
                    </FormLabel>
                    <Input
                      id="pharmacie"
                      placeholder="Enter your pharmacy "
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
  )
}
