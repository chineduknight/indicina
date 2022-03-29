import { Box, Button, Image, Flex, Center } from '@chakra-ui/react'
import githubLogo from 'assets/images/githubLogo.png'
import UserAvatar from 'components/UserAvatar'
import SearchBox from 'components/SearchBox'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PROTECTED_PATHS } from 'routes/constants'
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const history = useNavigate();
  const handleSearch = () => {
    history(PROTECTED_PATHS.RESULT + `?searchTerm=${searchTerm}`)
  }
  return (
    <Box>
      <Flex
        mt="0.9375rem"
        mr={{
          base: "1rem",
          md: "9.25rem"
        }}
        justifyContent="right"
      >
        <UserAvatar />
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
        <Box
          mt="1.25rem"
          mb="1.875rem"
          w="100%"
        >

          <SearchBox onChange={(e) => setSearchTerm(e.target.value)} />
        </Box>
        <Button
          disabled={!searchTerm}
          onClick={handleSearch}
        >Search Github</Button>
      </Center>
    </Box>
  )
}

export default Search