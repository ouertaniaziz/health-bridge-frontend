import { useState,useEffect } from 'react';
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
} from '@chakra-ui/react';

const Tables = ({ medications }) => {
    const [selectedMedications, setSelectedMedications] = useState([]);
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const handleAddMedication = medication => {
    setSelectedMedications(prevSelectedMedications => [
      ...prevSelectedMedications,
      medication,
    ]);
  };
  useEffect(() => {
    console.log("aaaaaaaaaa",medications);
    }, [medications]);

  return (
    <TableContainer maxWidth={'100%'}>
      <Table variant="simple" size={'sm'}>
        <Thead size={'sm'}>
          <Tr>
            <Th bgColor={'blue.100'}>
              Medication
              <br /> Name
            </Th>
            <Th>Manufacturer</Th>
            <Th>
              Dosage
              <br /> Form
            </Th>
            <Th>
              Quantity <br /> (mg)
            </Th>
            <Th>
              Num <br /> Packets
            </Th>
            <Th>Creation Date</Th>
            <Th>Exp Date</Th>
            <Th>Price</Th>
            <Th>Prescription
                <br /> Required
                </Th> 
          </Tr>
        </Thead>
        <Tbody>
          {medications &&
            medications.map(medication => (
              <Tr key={medication._id}>
                <Td>{medication.medicationName}</Td>
                <Td>{medication.manufacturer}</Td>
                <Td>{medication.dosageForm}</Td>
                <Td>{medication.quantity}</Td>

                <Td borderColor={borderColor}>
                  <Badge
                    bg={
                      medication.prescriptionRequired ? 'green.400' : 'gray.200'
                    }
                    color={'white'}
                    fontSize={'16px'}
                    p="3px 10px"
                    borderRadius={'8px'}
                  >
                    {medication.prescriptionRequired ? 'Yes' : 'No'}
                  </Badge>
                </Td>
                <Td>{medication.numPackets}</Td>
                <Td>{medication.creationDate}</Td>
                <Td>{medication.expDate}</Td>
                <Td>{medication.price}</Td>
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
  );
};

export default Tables;