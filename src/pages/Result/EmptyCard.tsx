import { Box } from '@chakra-ui/react'

const EmptyCard = () => {
  return <Box
    bg="#fff"
    boxShadow="0px 6px 58px rgba(196, 203, 214, 0.1)"
    borderRadius="3px"
    p="1.25rem"
    w="42.5rem"
    fontWeight="bold"
  >There is nothing here</Box>
}

export default EmptyCard