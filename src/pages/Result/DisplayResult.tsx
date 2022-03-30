import { Box, VStack, Text } from '@chakra-ui/react';
import EmptyCard from './EmptyCard';
import RepoCard from './RepoCard';
import UserCard from './UserCard';

type DisplayProps = {
  isUsers: boolean,
  usersCount: number,
  repoCount: number,
  users: any[],
  repos: any[]
}
const DisplayResult = (props: DisplayProps) => {
  const { isUsers, usersCount, repoCount, users, repos } = props
  return <Box>
    <Text
      color="#000000"
      fontSize="1.25rem"
      fontWeight="bold"
      mb="1.5625rem"
    >{isUsers ?
      usersCount.toLocaleString('en-US') :
      repoCount.toLocaleString('en-US')}
      {isUsers ? " Users" : " repository results"}</Text>


    <VStack spacing="1.25rem">
      {isUsers ? users.length === 0 ? <EmptyCard /> : users.map((user: any) => <UserCard key={user.id}
        user={user} />)

        :

        repos.length === 0 ? <EmptyCard /> : repos.map((repo, index) => <RepoCard
          key={index}
          repo={repo} />
        )}
    </VStack>
  </Box>;
}

export default DisplayResult