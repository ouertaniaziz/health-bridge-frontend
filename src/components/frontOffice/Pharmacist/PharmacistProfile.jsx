import React, { useContext } from 'react';
import SocialProfileSimple from './SocialProfileSimple';
import { useSelector } from 'react-redux';
import { HStack, Box } from '@chakra-ui/react';
import PharmacistInformation from './PharmacistInformation';
import { UserContext } from './UserPharmacist'; 



const PharmacistProfile = () => {
  const user = useContext(UserContext);
  if (Object.keys(user).length === 0) {
    return <Box>wait....</Box>;
  } else {
    console.log(user.pharmacist, 'this a pharmacist');

    return (
      <>
        { <HStack
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <SocialProfileSimple user={user.user} pharmacist={user.pharmacist} />
          <PharmacistInformation user={user.user} />
        </HStack> }
        
      </>
    );
  }
};



export default PharmacistProfile;
