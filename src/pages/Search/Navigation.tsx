import { Flex } from '@chakra-ui/react'
import UserAvatar from 'components/UserAvatar'

const Navigation = () => {
  return (
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
  )
}

export default Navigation