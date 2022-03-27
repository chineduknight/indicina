import { Box, Flex, Text, Button, VStack } from "@chakra-ui/react";
import NavBar from 'components/NavBar';

const Results = () => {
  return (
    <Box minH="100vh" bg="#FAFBFC">
      <NavBar />
      <Flex
        mt="1.875rem"
        justifyContent="center"
      >

        <Box
          bg="#fff"
          boxShadow="0px 6px 58px rgba(196, 203, 214, 0.1)"
          borderRadius="3px"
          p="4"
          h="max-content"
          mr="1.25rem"
          position="sticky"
          top="6.5625rem"
        >
          <Button variant="unstyled"
            display="flex"
            justifyContent="space-between"
            w="13.75rem"
            fontWeight="normal"
            fontSize="0.875rem"
            bg="#F7F7F8"
            p="0.625rem"
          >
            <Text
              color="#5C5C5C"

            >
              Repositories
            </Text>
            <Text
              bg="#DCDCDF"
              borderRadius="0.625rem"
              p="2px 7px 4px 6px"
              width="2.5rem"
              height="1.25rem"
              lineHeight="1rem"
              fontWeight="bold"
              fontSize="0.6875rem"
            >
              492k
            </Text>

          </Button>
          <Button variant="unstyled"
            display="flex"
            justifyContent="space-between"
            w="13.75rem"
            fontWeight="normal"
            fontSize="0.875rem"
            p="0.625rem"
            _hover={{
              bg: "#F7F7F8"
            }}
          >
            <Text
              color="#5C5C5C"
            >
              Users
            </Text>
            <Text
              bg="#DCDCDF"
              borderRadius="0.625rem"
              p="2px 7px 4px 6px"
              width="2.5rem"
              height="1.25rem"
              lineHeight="1rem"
              fontSize="0.6875rem"
              fontWeight="bold"

            >
              120
            </Text>

          </Button>
        </Box>
        <Box>
          <Text
            color="#000000"
            fontSize="1.25rem"
            fontWeight="bold"
            mb="1.5625rem"
          >2,985 repository results</Text>
          <VStack spacing="1.25rem">
            {
              new Array(20).fill(0).map((_, index) =>
                <DisplayCard key={index} />
              )
            }
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

const DisplayCard = () => {
  return <Box
    bg="#fff"
    boxShadow="0px 6px 58px rgba(196, 203, 214, 0.1)"
    borderRadius="3px"
    p="1.25rem"
    w="42.5rem"
  >
    <Text
      fontWeight="bold"
    >DrKLO/Telegram</Text>
    <Text
      color="#91929E"
      fontSize="0.875rem"
    >Telegram for Android source</Text>
    <Text
      color="#91929E"
      fontSize="0.75rem"
      mt="4"
    >17.2k Stars | Java | GPL-2.0 License | Updated 4 hours ago</Text>
  </Box>
}

export default Results;
