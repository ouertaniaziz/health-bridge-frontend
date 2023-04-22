import React, { useContext } from 'react';
import SocialProfileSimple from './SocialProfileSimple';
import { useSelector } from 'react-redux';
import { HStack, Box } from '@chakra-ui/react';
import DoctorInformation from './DoctorInformation';
import { UserContext } from './UserProvider';

const DoctorProfile = () => {
  const user = useContext(UserContext);
  if (Object.keys(user).length === 0) {
    return <Box>wait....</Box>;
  } else {
    console.log(user.doctor, 'this a doctor');

    return (
      <>
        <HStack
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <SocialProfileSimple user={user.user} doctor={user.doctor} />
          <DoctorInformation user={user.user} />
        </HStack>
      </>
    );
  }
};

//open pull request

export default DoctorProfile;
