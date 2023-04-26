import React from 'react';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Badge,
  Button,
} from '@chakra-ui/react';
import DOMPurify from 'dompurify';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const IMAGE =
  'https://ik.imagekit.io/r5nhyj1e1/Pharmacie-logo.jpg?updatedAt=1682472109467';
const PrespctionCard = ({ prescription }) => {
  const navigate = useNavigate();
  const cleanedHtml = DOMPurify.sanitize(prescription.qrCodeVerif);
  const navigateToPrespection = () => {
    navigate(`/patient/Prescription/${prescription._id}`);
  };
  return (
    <Box
      role={'group'}
      p={3}
      maxW={'350px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'lg'}
      pos={'relative'}
    >
      <Box
        rounded={'lg'}
        pos={'relative'}
        height={'230px'}
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 5,
          left: 0,
          bgColor: 'blue.400',
          filter: 'blur(15px)',
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: 'blur(20px)',
          },
        }}
      >
        <Box
          w={{ base: 'full', md: '50%' }}
          pos={'relative'}
          dangerouslySetInnerHTML={{ __html: cleanedHtml }}
        />
      </Box>
      <Stack pt={10} align={'center'}>
        <Text fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
          RDV : {moment(prescription.date).calendar()}
        </Text>
        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          {prescription.doctor.name}
        </Heading>
        {prescription.verified ? (
          <Box>
            {' '}
            <Badge colorScheme="green">Success</Badge>
            <Button onClick={navigateToPrespection}>consulter </Button>
          </Box>
        ) : (
          <Badge colorScheme="red">Pending</Badge>
        )}
      </Stack>
    </Box>
  );
};

export default PrespctionCard;
