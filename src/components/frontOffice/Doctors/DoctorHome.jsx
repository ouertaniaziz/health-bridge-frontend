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
     
    </Box>
  );
};

export default DoctorHome;
