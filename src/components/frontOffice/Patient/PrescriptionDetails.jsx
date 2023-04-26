import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPrescriptionById } from './service/patientservice';
import DOMPurify from 'dompurify';
import {
  Box,
  Center,
  Heading,
  Flex,
  Avatar,
  Image,
  useColorModeValue,
  Text,
  HStack,
  Tbody,
  Table,
  Thead,
  TableContainer,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const PrescriptionDetails = () => {
  const [prescription, setprescription] = useState();
  const { id } = useParams();
  const [loading, setloading] = useState(true);
  const [cleanedHtml, setcleanedHtml] = useState();
  useEffect(() => {
    const fetchPrescriptionById = async () => {
      try {
        const response = await getPrescriptionById(id);
        setprescription(response);
      } catch (error) {
        console.log(error);
      } finally {
        console.log(prescription);
        setloading(false);
        setcleanedHtml(DOMPurify.sanitize(prescription.qrCodeVerif));
      }
    };
    fetchPrescriptionById();
  }, [id, loading]);
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <Center>
      <Box rounded={'xl'} w={'400px'} h={'600px'}>
        <Box
          maxW={'500px'}
          w={'full'}
          bg={'white'}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          align={'center'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#a2d9ff"
              fill-opacity="1"
              d="M0,64L20,53.3C40,43,80,21,120,37.3C160,53,200,107,240,138.7C280,171,320,181,360,192C400,203,440,213,480,234.7C520,256,560,288,600,282.7C640,277,680,235,720,186.7C760,139,800,85,840,58.7C880,32,920,32,960,32C1000,32,1040,32,1080,69.3C1120,107,1160,181,1200,176C1240,171,1280,85,1320,48C1360,11,1400,21,1420,26.7L1440,32L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
            ></path>
          </svg>
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
          <Heading align={'center'} fontSize={'l'}>
            Certificate Id : {prescription._id}
          </Heading>

          <Text fontWeight={600} pl={'10px'}>
            Patient Cin :{prescription.patient.cin}
          </Text>

          <Text fontWeight={600} pl={'10px'}>
            Doctor Name :{prescription.doctor.name}
          </Text>
          <Text fontWeight={600} pl={'10px'}>
            Doctor Speciality :{prescription.doctor.speciality}
          </Text>
          <HStack ml={'30px'}>
            <CheckCircleIcon boxSize={'20px'} color={'green.500'} />
            <Text fontWeight={600} align={'center'} fontSize={'l'}>
              Your certificate has been validate successfully
            </Text>
          </HStack>

          <Text fontWeight={600} align={'center'} fontSize={'l'}>
            Prescription Details
          </Text>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th> Medication Name </Th>
                  <Th>Dosage Form</Th>
                  <Th>Dosage Strength</Th>
                </Tr>
              </Thead>
              <Tbody>
                {' '}
                {prescription.traitement.map(trait => (
                  <Tr>
                    <Td>{trait.medicationName}</Td>
                    <Td>{trait.dosageForm}</Td>
                    <Td>{trait.dosageStrength}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Box p={6}>
            <Box dangerouslySetInnerHTML={{ __html: cleanedHtml }} />
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default PrescriptionDetails;
