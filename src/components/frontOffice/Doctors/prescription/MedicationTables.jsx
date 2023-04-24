import { useState, useEffect, useContext } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  useColorModeValue,
  Badge,
  Box,
} from '@chakra-ui/react';
import { AddPrespiction } from '../doctor.service';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserProvider';
import { useNavigate } from 'react-router-dom';

const MedicationsTable = ({ medications }) => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [newTable, setnewTable] = useState(false);
  const [selectedMedications, setSelectedMedications] = useState([]);
  const [idMedications, setidMedications] = useState([]);

  const borderColor = useColorModeValue('gray.200', 'gray.600');
  console.log(medications);
  const handleAddMedication = medication => {
    setnewTable(true);
    setSelectedMedications(prevSelectedMedications => [
      ...prevSelectedMedications,
      medication,
    ]);
    setidMedications(prevIdMedications => [
      ...prevIdMedications,
      medication._id,
    ]);
  };
  const handleRemoveMedication = (e, medicationId) => {
    setSelectedMedications(prevSelectedMedications =>
      prevSelectedMedications.filter(
        medication => medication._id !== medicationId
      )
    );
    setidMedications(prevIdMedications =>
      prevIdMedications.filter(medication => medication._id !== medicationId)
    );
  };
  useEffect(() => {
    if (selectedMedications.length === 0) {
      setnewTable(false);
    }
  }, [selectedMedications]);

  return (
    <Box>
      <TableContainer maxWidth={'100%'}>
        <Table variant="simple" size={'sm'}>
          <Thead size={'sm'}>
            <Tr>
              <Th>
                Medication
                <br /> Name
              </Th>
              <Th>Manufacturer</Th>
              <Th>
                Dosage
                <br /> Form
              </Th>
              <Th>
                Dosage <br /> Strength
              </Th>

              <Th>
                Prescription <br /> Required
              </Th>
              <Th>
                Num <br /> Packets
              </Th>
              <Th>Description</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody bg={'blue.100'}>
            {medications &&
              medications.map(medication => (
                <Tr key={medication._id}>
                  <Td color={'black'}>{medication.medicationName}</Td>
                  <Td color={'black'}>{medication.manufacturer}</Td>
                  <Td color={'black'}>{medication.dosageForm}</Td>
                  <Td color={'black'}>{medication.dosageStrength}</Td>

                  <Td borderColor={borderColor}>
                    <Badge
                      bg={
                        medication.prescriptionRequired
                          ? 'green.400'
                          : 'gray.200'
                      }
                      color={'white'}
                      fontSize={'16px'}
                      p="3px 10px"
                      borderRadius={'8px'}
                    >
                      {medication.prescriptionRequired ? 'Yes' : 'No'}
                    </Badge>
                  </Td>
                  <Td color={'black'}>{medication.numPackets}</Td>
                  <Td color={'black'}>{medication.description}</Td>
                  <Td>
                    <Button
                      colorScheme="green"
                      onClick={() => handleAddMedication(medication)}
                    >
                      +
                    </Button>{' '}
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <div>
        {newTable ? (
          <TableContainer maxWidth={'100%'}>
            <Table variant="simple" size={'sm'}>
              <Thead size={'sm'}>
                <Tr>
                  <Th>
                    Medication
                    <br /> Name
                  </Th>
                  <Th>Manufacturer</Th>
                  <Th>
                    Dosage
                    <br /> Form
                  </Th>
                  <Th>
                    Dosage <br /> Strength
                  </Th>

                  <Th>
                    Prescription <br /> Required
                  </Th>
                  <Th>
                    Num <br /> Packets
                  </Th>
                  <Th>Description</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody bg={'blue.100'}>
                {selectedMedications &&
                  selectedMedications.map(medication => (
                    <Tr key={medication._id}>
                      <Td color={'black'}>{medication.medicationName}</Td>
                      <Td color={'black'}>{medication.manufacturer}</Td>
                      <Td color={'black'}>{medication.dosageForm}</Td>
                      <Td color={'black'}>{medication.dosageStrength}</Td>

                      <Td borderColor={borderColor}>
                        <Badge
                          bg={
                            medication.prescriptionRequired
                              ? 'green.400'
                              : 'gray.200'
                          }
                          color={'white'}
                          fontSize={'16px'}
                          p="3px 10px"
                          borderRadius={'8px'}
                        >
                          {medication.prescriptionRequired ? 'Yes' : 'No'}
                        </Badge>
                      </Td>
                      <Td color={'black'}>{medication.numPackets}</Td>
                      <Td color={'black'}>{medication.description}</Td>
                      <Td>
                        <Button
                          colorScheme="red"
                          onClick={e =>
                            handleRemoveMedication(e, medication._id)
                          }
                        >
                          -
                        </Button>{' '}
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
            <Button
              px={4}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              onClick={e => {
                e.preventDefault();
                console.log(selectedMedications);
                const data = {
                  patient: id,
                  doctor: user.doctor._id,

                  traitement: idMedications,
                };
                AddPrespiction(data);
                navigate('/doctor/appointments');
              }}
            >
              valide Prescription
            </Button>
          </TableContainer>
        ) : null}
      </div>
    </Box>
  );
};

export default MedicationsTable;
