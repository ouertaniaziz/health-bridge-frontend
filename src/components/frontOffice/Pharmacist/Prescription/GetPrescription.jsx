import React, { useEffect, useState } from 'react';

import Tables from './Tables';
import { Box } from '@chakra-ui/react';

const GetPrescription = () => {

    const [prescription, setPrescription] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3001/prescription')
        .then(res => res.json())
        .then(data => {
            setPrescription(data);
        });
            
    }, []);
    
    return (
        <Box>
        <Tables prescription={prescription} />
        </Box>
    );
    };


export default GetPrescription;