import { Box } from '@chakra-ui/react';

import Actions from './Actions';
import Data from './Data';
import Profile from './Profile';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Sidebar() {
  const patient = useSelector(state => state.patient.value);

  return (
    <Box
      as="aside"
      flex={1}
      mr={{ base: 0, md: 5 }}
      mb={{ base: 5, md: 0 }}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="brand.light"
      style={{ transform: 'translateY(-100px)' }}
    >
      <Profile patient={patient} />
      <Data />
      <Actions />
    </Box>
  );
}

export default Sidebar;
