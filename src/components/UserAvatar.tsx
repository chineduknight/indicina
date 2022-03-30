import { Flex, Avatar, useOutsideClick, Text, useBoolean, Button } from '@chakra-ui/react'
import { ReactComponent as DownArrowIcon } from 'assets/images/downArrow.svg'
import { useRef } from 'react';
import { logUserOut } from 'utils/helpers';

const UserAvatar = () => {
  const ref = useRef<any>()
  const [showLogout, setShowLogout] = useBoolean();
  const handleLogout = () => {
    logUserOut()
  }
  useOutsideClick({
    ref,
    handler: () => setShowLogout.off(),
  })
  return (
    <Flex
      data-test="user-avatar"
      ref={ref}
      alignItems="center"
      justify="right"
      position="relative"
      w="max-content"
      _hover={{
        cursor: "pointer",
      }}
    >
      <Button
        data-test="avatar-btn"
        _focus={{
          border: "1px solid blue"
        }}
        variant="unstyled"
        d="flex"
        fontWeight="normal"
        onClick={setShowLogout.toggle}
      >
        <Avatar w="3.125rem" h="3.125rem"
        />
        <Text color="#1C1C1C" fontFamily="Roboto"
          mx="0.625rem"
        >John Doe</Text>
        <DownArrowIcon />
      </Button>
      {showLogout &&
        <Button
          data-test="logout-btn"
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
          p="26px 37px"
          onClick={handleLogout}
        >Logout</Button>}
    </Flex>
  )
}

export default UserAvatar