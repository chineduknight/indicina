import { Box, Button, Image, Center } from '@chakra-ui/react'
import githubLogo from 'assets/images/githubLogo.png'
import UserAvatar from 'components/UserAvatar'
import SearchBox from 'components/SearchBox'
const Search = () => {
  return (
    <Box>
      <Box
        mt="0.9375rem"
        mr={{
          base: "1rem",
          md: "9.25rem"
        }}
      >
        <UserAvatar />
      </Box>
      <Center flexDir={"column"} maxW="37.5rem" margin="auto"
        mt="11.875rem"
      >
        <Image
          src={githubLogo}
          alt="git hub icon"
          w="12.8125rem"
          h="4.375rem"
        />
        <Box
          mt="1.25rem"
          mb="1.875rem"
          w="100%"
        >

          <SearchBox />
        </Box>
        <Button>Search Github</Button>
      </Center>
    </Box>
  )
}

export default Search