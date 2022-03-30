import { Box, Text } from '@chakra-ui/react';

const UserCard = (props: any) => {
  const { user } = props;
  const userDetails = {
    name: user.name || "None",
    userName: user.login,
    bio: user?.bio || "None",
  }

  const { name, userName, bio } = userDetails


  return <Box
    bg="#fff"
    boxShadow="0px 6px 58px rgba(196, 203, 214, 0.1)"
    borderRadius="3px"
    p="1.25rem"
    w="42.5rem"
  >
    <Text
      fontWeight="bold"
      display="inline-block"
    > {name} </Text>
    <Text
      display="inline"
      color="#91929E"
      fontSize="0.875rem"
      ml="0.625rem"
    >{userName} </Text>
    <Text
      color="#91929E"
      fontSize="0.75rem"
      mt="4"
    >
      {bio}
    </Text>
  </Box>
}

export default UserCard