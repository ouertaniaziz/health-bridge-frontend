import {
  Box,
  Button,
  FormControl,
  FormHelperText,
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
import { useState } from 'react';
import { uploadfilespatient } from '../service/patientservice';

function Medicalinformations() {
  const [selectedFile, setSelectedFile] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleSubmit = async event => {
    event.preventDefault();
    let formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('username', user.username);
    // Send the formData object to the server using an HTTP request library such as Axios
    let status = await uploadfilespatient(formData);
    console.log(status)
    
  
  };
  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <Formik>
        <Form>
          <FormControl>
            <FormLabel>Cin Image</FormLabel>
            <Input type="file" p={{ lg: 1 }} onChange={handleFileChange} />
            <FormHelperText id="email-helper-text">
              Take a picture of your identity card and place it in this field
            </FormHelperText>
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
            <Button type="submit" onClick={handleSubmit}>Update</Button>
          </Box>
        </Form>
      </Formik>
    </Grid>
  );
}

export default Medicalinformations;
