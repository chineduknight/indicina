import { Flex, Avatar, Text } from '@chakra-ui/react'
import { ReactComponent as DownArrowIcon } from 'assets/images/downArrow.svg'

const UserAvatar = () => {
  return (
    <Flex
      alignItems="center"
      justify="right"

    >
      <Avatar w="3.125rem" h="3.125rem"
      />
      <Text color="#1C1C1C" fontFamily="Roboto"

        mx="0.625rem"
      >John Doe</Text>
      <DownArrowIcon />
    </Flex>
  )
}

export default UserAvatar