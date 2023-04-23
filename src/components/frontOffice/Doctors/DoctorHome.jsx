import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const DoctorHome = () => {
  const navigate = useNavigate();
  const navigateToPrescription = e => {
    e.preventDefault();
    navigate('/doctor/addPrespiction');
    
  };
  return (
    <Box>
      <Button
        px={4}
        fontSize={'sm'}
        rounded={'full'}
        bg={'blue.400'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'blue.500',
        }}
        _focus={{
          bg: 'blue.500',
        }}
        onClick={e => {
          navigateToPrescription(e);
        }}
      >
        Add Prescription
      </Button>
    </Box>
  );
};

export default DoctorHome;
