import { Box, Text, VStack } from '@chakra-ui/react';

function Data() {
  return (
    <VStack as="ul" spacing={0} listStyleType="none">
      <Box
        //key={item.id}
        as="li"
        w="full"
        py={3}
        px={5}
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottomWidth={1}
        borderColor="brand.light"
      >
        <Text color="brand.dark">Medcin</Text>
        {/* <Text color={`brand.${item.color}`} fontWeight="bold">
            {item.value}
          </Text> */}
        <Text fontWeight="bold">Houssem Balti</Text>
      </Box>
    </VStack>
  );
}

export default Data;
