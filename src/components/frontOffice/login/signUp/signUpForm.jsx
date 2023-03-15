import React, { useState, useEffect } from 'react';
import { Progress, Box, ButtonGroup, Button, Flex } from '@chakra-ui/react';
import { Form1 } from './firstUserForm';
import { Form2 } from './secondUserForm';
import { Form3 } from './thirdUserForm';
import { useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { addUser } from '../service/auth.Service';
import PatienForm from './patientForm';
import { PharmacistForm } from './PharmacistForm';
{
  /*start pull request */
}

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const state = useSelector(state => state.formSignUp.value);
  const sendStep = data => {
    setStep(step + data);
    console.log(step);
  };
  useEffect(() => {
    if (step === 1) {
      setProgress(33.33);
    } else if (step === 2) {
      setProgress(66.66);
    } else {
      setProgress(100);
    }
  }, [step]);

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>

        {step === 1 ? (
          <Form1 sendStep={sendStep} />
        ) : step === 2 ? (
          <Form2 sendStep={sendStep} />
        ) : state.role === 'patient' ? (
          <PatienForm sendStep={sendStep} />
        ) :  state.role==='pharmacist' ?(
          <PharmacistForm sendStep={sendStep} />
        ) :     (
          state.role === 'doctor'
        )
        }
        {/*<ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  addUser(state);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  addUser();
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
              </ButtonGroup>*/}
      </Box>
    </>
  );
}
