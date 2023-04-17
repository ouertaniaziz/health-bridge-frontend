import { Box, Button } from '@chakra-ui/react'
import { updatepatient } from '../service/patientservice';
import { useSelector } from 'react-redux';

function Actions() {
  const patient = useSelector(state => state.patient.value);

  return (
    <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
      <Button onClick={()=>updatepatient(patient)}>Update</Button>
      
    </Box>
  )
}

export default Actions
