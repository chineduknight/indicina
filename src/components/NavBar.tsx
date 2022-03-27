import { Box, Center, Flex, Image } from '@chakra-ui/react'
import SearchBox from './SearchBox'
import UserAvatar from './UserAvatar'
import githubLogo from "assets/images/githubLogo.png";

const NavBar = () => {
  return (
    <Box as="nav" position="sticky" top="0" bg="#fff" boxShadow="0px 0px 5px rgba(196, 203, 214, 0.7)">
      <Center w="71.875rem" m="auto">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w="100%"
          py="2"
        >
          <Box w="10.8125rem">
            <Image src={githubLogo} alt="git hub icon" w="100%" />
          </Box>
          <Box w="23.75rem">
            <SearchBox small />
          </Box>
          <UserAvatar />
        </Flex>
      </Center>
    </Box>
  )
}

export default NavBar