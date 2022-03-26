import { Box, Flex, Avatar, Button, Text, Image, Center, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import githubLogo from 'assets/images/githubLogo.png'
import { ReactComponent as SearchIcon } from 'assets/images/searchIcon.svg'
import { ReactComponent as DownArrowIcon } from 'assets/images/downArrow.svg'
const Search = () => {
  return (
    <Box>
      <Flex
        alignItems="center"
        justify="right"
        textAlign="right"
        mt="0.9375rem"
        mr={{
          base: "1rem",
          md: "9.25rem"
        }}
      >
        <Avatar w="3.125rem" h="3.125rem"
        />
        <Text color="#1C1C1C" fontFamily="Roboto"

          mx="0.625rem"
        >John Doe</Text>
        <DownArrowIcon />
      </Flex>
      <Center flexDir={"column"} maxW="37.5rem" margin="auto"
        mt="11.875rem"
      >
        <Image
          src={githubLogo}
          alt="git hub icon"
          w="12.8125rem"
          h="4.375rem"
        />
        <InputGroup size='sm' mt="1.25rem" mb="1.875rem">
          <Input placeholder='Search...'
            _focus={{
              outline: "none"
            }}
            border="1px solid #C4C4C4"
            boxSizing="border-box"
            borderRadius="100px"
            h="3.125rem"
            pl="1.25rem"
          />
          <InputRightElement h="100%"
            mr="1.25rem"
          >
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
        <Button>Search Github</Button>
      </Center>
    </Box>
  )
}

export default Search