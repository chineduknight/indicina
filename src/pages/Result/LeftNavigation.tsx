import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react'
import { formatNumber } from 'utils/helpers';

type LeftNavProps = {
  isUsers: boolean,
  setisUsers: { readonly on: () => void; readonly off: () => void; readonly toggle: () => void; },
  repoCount: number,
  // onClick?: (type: 'repo' | 'users') => void
  usersCount: number
}
const LeftNavigation = (props: LeftNavProps) => {
  const { isUsers, setisUsers, repoCount, usersCount } = props

  return (<Box
    bg="#fff"
    boxShadow="0px 6px 58px rgba(196, 203, 214, 0.1)"
    borderRadius="3px"
    p="4"
    h="max-content"
    mr="1.25rem"
    position="sticky"
    top="6.5625rem"
  >
    <Button
      variant="unstyled"
      display="flex"
      justifyContent="space-between"
      w="13.75rem"
      fontWeight="normal"
      fontSize="0.875rem"
      bg={isUsers ? "" : "#F7F7F8"}
      p="0.625rem"
      onClick={setisUsers.off}
      _hover={{
        bg: "#F7F7F8"
      }}
    >
      <Text
        color="#5C5C5C"

      >
        Repositories
      </Text>
      <Text
        bg="#DCDCDF"
        borderRadius="0.625rem"
        p="2px 7px 4px 6px"
        width="2.5rem"
        height="1.25rem"
        lineHeight="1rem"
        fontWeight="bold"
        fontSize="0.6875rem"
        color="#5C5C5C"
      >
        {formatNumber(repoCount)}
      </Text>

    </Button>
    <Button
      onClick={setisUsers.on}
      variant="unstyled"
      display="flex"
      justifyContent="space-between"
      w="13.75rem"
      fontWeight="normal"
      fontSize="0.875rem"
      p="0.625rem"
      color="#5C5C5C"
      bg={isUsers ? "#F7F7F8" : ""}

      _hover={{
        bg: "#F7F7F8"
      }}
    >
      <Text
        color="#5C5C5C"
      >
        Users
      </Text>
      <Text
        bg="#DCDCDF"
        borderRadius="0.625rem"
        p="2px 7px 4px 6px"
        width="2.5rem"
        height="1.25rem"
        lineHeight="1rem"
        fontSize="0.6875rem"
        fontWeight="bold"

      >
        {formatNumber(usersCount)}
      </Text>

    </Button>
  </Box>);
}

export default LeftNavigation