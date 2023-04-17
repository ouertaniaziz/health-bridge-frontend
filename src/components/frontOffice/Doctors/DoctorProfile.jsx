import React, { useContext } from 'react';
import SocialProfileSimple from './SocialProfileSimple';
import { useSelector } from 'react-redux';
import { HStack, Box } from '@chakra-ui/react';
import DoctorInformation from './DoctorInformation';
import { UserContext } from './UserProvider';

const DoctorProfile = () => {
  const user = useContext(UserContext);
  console.log(user);
  if (Object.keys(user).length === 0) {
    return <Box>wait....</Box>;
  } else {
    return (
      <>
        <HStack>
          <SocialProfileSimple user={user} />
          <DoctorInformation user={user} />
        </HStack>
      </>
    );
  }
};

//open pull request

export default DoctorProfile;
