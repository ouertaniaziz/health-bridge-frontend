import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';

function Medicalinformations() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <Formik>
        <Form>
          <FormControl>
            <FormLabel>bloodGroup</FormLabel>
            <InputGroup>
              <Input
                focusBorderColor="brand.blue"
                type="text"
                placeholder="apple"
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>medicalHistory</FormLabel>
            <Input
              focusBorderColor="brand.blue"
              type="text"
              placeholder="Apple"
            />
          </FormControl>
          <FormControl id="emailCompany">
            <FormLabel>insuranceInformation</FormLabel>
            <Input
              focusBorderColor="brand.blue"
              type="email"
              placeholder="info@apple.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel>dateOfBirth</FormLabel>
            <Input placeholder="Select Date and Time" size="md" type="date" />
          </FormControl>
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

export default Medicalinformations;
