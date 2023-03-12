import React, { useState, useEffect } from 'react';
import {
  Heading,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
  Button,
  ButtonGroup,
  Flex,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { validateString, validateNumber } from './validationForm';
export const Form2 = props => {
  const handleBack = () => props.sendStep(-1);

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Details
      </Heading>
      <Formik
        initialValues={{
          StreetAddress: '',
          city: '',
          state: '',
          postal_code: '',
        }}
        onSubmit={(values, actions) => {
          props.sendStep(1);
        }}
      >
        {props => (
          <Form>
            <FormControl as={GridItem} colSpan={[6, 3]}>
              <FormLabel
                htmlFor="country"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
              >
                Country / Region
              </FormLabel>
              <Select
                id="country"
                name="country"
                autoComplete="country"
                placeholder="Select option"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </Select>
            </FormControl>
            <Field name="StreetAddress" validate={validateString}>
              {({ field, form }) => (
                <FormControl
                  as={GridItem}
                  colSpan={6}
                  isInvalid={
                    form.errors.StreetAddress && form.touched.StreetAddress
                  }
                >
                  <FormLabel
                    htmlFor="StreetAddress"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: 'gray.50',
                    }}
                    mt="2%"
                  >
                    Street address
                  </FormLabel>
                  <Input
                    type="text"
                    name="StreetAddress"
                    id="StreetAddress"
                    autoComplete="street-address"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...field}
                  />
                  <FormErrorMessage>
                    {form.errors.StreetAddress}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="city" validate={validateString}>
              {({ field, form }) => (
                <FormControl
                  as={GridItem}
                  colSpan={[6, 6, null, 2]}
                  isInvalid={form.errors.city && form.touched.city}
                >
                  <FormLabel
                    htmlFor="city"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: 'gray.50',
                    }}
                    mt="2%"
                  >
                    City
                  </FormLabel>
                  <Input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="city"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...field}
                  />
                  <FormErrorMessage>{form.errors.city}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="state" validate={validateString}>
              {({ field, form }) => (
                <FormControl
                  as={GridItem}
                  colSpan={[6, 3, null, 2]}
                  isInvalid={form.errors.state && form.touched.state}
                >
                  <FormLabel
                    htmlFor="state"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: 'gray.50',
                    }}
                    mt="2%"
                  >
                    State / Province
                  </FormLabel>
                  <Input
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="state"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...field}
                  />
                  <FormErrorMessage>{form.errors.state}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="postal_code" validate={validateNumber}>
              {({ field, form }) => (
                <FormControl
                  as={GridItem}
                  colSpan={[6, 3, null, 2]}
                  isInvalid={
                    form.errors.postal_code && form.touched.postal_code
                  }
                >
                  <FormLabel
                    htmlFor="postal_code"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: 'gray.50',
                    }}
                    mt="2%"
                  >
                    ZIP / Postal
                  </FormLabel>
                  <Input
                    type="text"
                    name="postal_code"
                    id="postal_code"
                    autoComplete="postal-code"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...field}
                  />
                  <FormErrorMessage>{form.errors.postal_code}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <ButtonGroup mt="5%" w="100%">
              <Flex w="100%" justifyContent="space-between">
                <Flex>
                  <Button
                    isDisabled={false}
                    colorScheme="teal"
                    variant="solid"
                    w="7rem"
                    mr="5%"
                    onClick={handleBack}
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
