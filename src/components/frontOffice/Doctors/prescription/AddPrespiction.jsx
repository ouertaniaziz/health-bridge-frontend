import React, { useEffect, useState } from 'react';
import { getMedication } from '../doctor.service';
import MedicationsTable from './MedicationTables';
import { Box } from '@chakra-ui/react';

const AddPrespiction = () => {
  const [Medication, setMedication] = useState([]);

  useEffect(() => {
    const fetchMedication = async () => {
      const result = await getMedication();
      if (result && result.data) {
        setMedication(result.data);
      }
    };
    fetchMedication();
  }, []);
  let MedicationAff;
  if (Medication.length !== 0) {
    console.log(Medication, 'test');

    MedicationAff = (
      <Box size={'sm'}>
        {' '}
        <MedicationsTable medications={Medication} />
      </Box>
    );
  }

  return <div>{MedicationAff}</div>;
};

export default AddPrespiction;
