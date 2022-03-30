import { Flex, Button } from '@chakra-ui/react';



type PaginatorProps = {
  handleNext: () => void
  handlePrevious: () => void
  pagination: {
    hasPreviousPage: boolean,
    hasNextPage: boolean
  }
}

const Paginator = (props: PaginatorProps) => {
  const { handleNext, handlePrevious, pagination } = props;
  return <Flex justifyContent="space-between" mt="4">
    <Button
      disabled={!pagination.hasPreviousPage}
      onClick={handlePrevious}
    >
      Prev
    </Button>
    <Button
      disabled={!pagination.hasNextPage}
      onClick={handleNext}
    >
      Next
    </Button>
  </Flex>;
}

export default Paginator