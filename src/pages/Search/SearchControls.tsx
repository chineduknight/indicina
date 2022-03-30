import { Center, Box, Button, Image } from '@chakra-ui/react'
import SearchBox from 'components/SearchBox'
import githubLogo from 'assets/images/githubLogo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PROTECTED_PATHS } from 'routes/constants'

const SearchControls = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const history = useNavigate();
  const handleSearch = () => {
    history(PROTECTED_PATHS.RESULT + `?searchTerm=${searchTerm}`)
  }

  return (
    <Center data-test="search-controls" flexDir="column" maxW="37.5rem" margin="auto" mt="11.875rem">
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
        data-test="search-btn"
        disabled={!searchTerm}
        onClick={handleSearch}
      >Search Github</Button>
    </Center>
  )
}

export default SearchControls