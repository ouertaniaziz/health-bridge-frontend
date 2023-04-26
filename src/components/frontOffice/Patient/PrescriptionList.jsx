import React, { useState, useEffect } from 'react';
import { SimpleGrid, Button, Box } from '@chakra-ui/react';

import { getPrescription } from './service/patientservice';
import PrespctionCard from './PrespctionCard';
const PrescriptionList = ({ patientId }) => {
  const [cardsToShow, setCardsToShow] = useState(6);

  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const response = await getPrescription(patientId);
        setPrescriptions(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPrescriptions();
  }, [patientId]);
  const handleShowMore = () => {
    setCardsToShow(cardsToShow + 12);
  };

  const getPrespctionToShow = () => {
    return prescriptions.slice(0, cardsToShow);
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      {' '}
      
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {getPrespctionToShow().map(prescription => (
          <PrespctionCard prescription={prescription} />
        ))}
      </SimpleGrid>
      {cardsToShow < prescriptions.length && (
        <Button mt="4" ml="30" onClick={handleShowMore} align={'center'}>
          Afficher plus
        </Button>
      )}
    </Box>
  );
};

export default PrescriptionList;
