import { useLazyQuery } from '@apollo/client';
import { Box, Flex, Text, VStack, useBoolean } from "@chakra-ui/react";
import NavBar from 'components/NavBar';
import { useEffect, useState } from 'react';
import { REPOSITORY, USERS } from '../query';
import Loader from 'components/Loader';
import { notifyOfError } from 'utils/helpers';
import _ from "lodash";
import RepoCard from './RepoCard'
import UserCard from './UserCard';
import EmptyCard from './EmptyCard'
import LeftNavigation from './LeftNavigation';


const Results = () => {
  const [isUsers, setisUsers] = useBoolean()
  const [repos, setRepos] = useState([]);
  const [repoCount, setRepoCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(0);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('searchTerm');
    if (searchTerm) {
      getRepos({
        variables: { searchTerm },
      });
      getUsers({
        variables: { searchTerm },
      });
    }
  }, [])

  const [getRepos, { loading: fetchingRepos }] = useLazyQuery(
    REPOSITORY,
    {
      onCompleted(res) {
        const response = res.search;
        setRepos(response.edges)
        setRepoCount(response.repositoryCount)
      },
      onError(error) {
        notifyOfError(error, "An Error Occured")
      },
    }
  );

  const [getUsers, { loading: fetchingUsers }] = useLazyQuery(
    USERS,
    {
      onCompleted(res) {
        const response = res.search;
        setUsers(response.nodes)
        setUsersCount(response.userCount)
      },
      onError(error) {
        notifyOfError(error, "An Error Occured")
      },
    }
  );

  const debounced = _.debounce(function (event) {
    handleChange(event);
  }, 1000);
  const isLoading = fetchingRepos || fetchingUsers;
  const handleChange = (event) => {
    const searchTerm = event.target.value
    getRepos({
      variables: { searchTerm },
    });
    getUsers({
      variables: { searchTerm },
    });
  }
  return (
    <Box minH="100vh" bg="#FAFBFC" pb="8">
      <NavBar onSearchChange={debounced} />
      {isLoading ?
        <Box mt="5rem"> <Loader /> </Box> :
        <Flex
          mt="1.875rem"
          justifyContent="center"
        >
          <LeftNavigation
            isUsers={isUsers}
            setisUsers={setisUsers}
            repoCount={repoCount}
            usersCount={usersCount}
          />
          <DisplayResult
            isUsers={isUsers}
            usersCount={usersCount}
            repoCount={repoCount}
            users={users}
            repos={repos}
          />
        </Flex>}
    </Box>
  );
};



export default Results;


type DisplayProps = {
  isUsers: boolean,
  usersCount: number,
  repoCount: number,
  users: never[],
  repos: never[]
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

