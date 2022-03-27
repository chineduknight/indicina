import { InputGroup, Input, InputRightElement } from '@chakra-ui/react'
import { ReactComponent as SearchIcon } from 'assets/images/searchIcon.svg'

type SearchBoxProps = {
  small?: boolean;
}

const SearchBox = (props: SearchBoxProps) => {
  const { small = false } = props;
  return (
    <InputGroup size='sm'
    >
      <Input placeholder='Search...'
        _focus={{
          outline: "none"
        }}
        border="1px solid #C4C4C4"
        boxSizing="border-box"
        borderRadius="100px"
        h={small ? "2.5rem" : "3.125rem"}
        pl="1.25rem"
      />
      <InputRightElement h="100%"
        mr="1.25rem"
      >
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchBox