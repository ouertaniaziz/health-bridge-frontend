import { Box, Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';
import { getpatient } from './service/patientservice';
import { useDispatch, useSelector } from 'react-redux';
import patient, { addpatient } from '../feature/patient';

const PatientProfile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  //var mridh = useSelector(state => state.patient.value);
  const dispatch = useDispatch();
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getpatient(user.username);
        //let firstname={firstname:response.firstname,lastname:response.lastname}
        let p = response;
        dispatch(addpatient(p));
        console.log(p);
       
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container
      display={{ base: 'block', md: 'flex' }}
      mt={{ base: '100px' }}
      maxW="container.xl"
    >
      <Box></Box>
      <Sidebar  />
      <Content  />
    </Container>
  );
};

export default PatientProfile;
