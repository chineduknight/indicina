import { Flex, Avatar, Box, Text, useBoolean } from '@chakra-ui/react'
import { ReactComponent as DownArrowIcon } from 'assets/images/downArrow.svg'
import { logUserOut } from 'utils/helpers';

const UserAvatar = () => {
  const [showLogout, setShowLogout] = useBoolean();
  const handleLogout = () => {
    logUserOut()
    setShowLogout.off;
  }
  return (
    <Flex
      alignItems="center"
      justify="right"
      position="relative"
      w="max-content"
      onClick={setShowLogout.toggle}
      _hover={{
        cursor: "pointer",
      }}
    >
      <Avatar w="3.125rem" h="3.125rem"
      />
      <Text color="#1C1C1C" fontFamily="Roboto"
        mx="0.625rem"
      >John Doe</Text>
      <DownArrowIcon />
      {showLogout && <Box
        color="#FF1733"
        position="absolute"
        top="50px"
        left="10px"
        _hover={{
          background: "#1C1C1C",
          color: "white",
          cursor: "pointer",
        }}
        background="#fff"
        boxShadow="0px 6px 58px rgba(196, 203, 214, 0.2)"
        borderRadius="3px"
        w="200px"
        border="1px solid rgba(196, 203, 214, 0.3)"
        p="19px 37px"
        onClick={handleLogout}
      >Logout</Box>}
    </Flex>
  )
}

export default UserAvatar