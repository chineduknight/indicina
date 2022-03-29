import { useLazyQuery } from '@apollo/client';
import { Box, Flex, Text, Button, VStack, useBoolean } from "@chakra-ui/react";
import NavBar from 'components/NavBar';
import { useEffect, useState } from 'react';
import { REPOSITORY, USERS } from './query';
import Loader from 'components/Loader';
import { notifyOfError } from 'utils/helpers';
import _ from "lodash";
import { useParams } from 'react-router-dom';

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

  const params = useParams();
  console.log('history:', params)
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
      {fetchingRepos || fetchingUsers ? <Box mt="5rem"> <Loader /></Box> : <Flex
        mt="1.875rem"
        justifyContent="center"
      >
        <Box
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
              {kFormatter(repoCount)}
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
              {kFormatter(usersCount)}
            </Text>

          </Button>
        </Box>
        <Box>
          <Text
            color="#000000"
            fontSize="1.25rem"
            fontWeight="bold"
            mb="1.5625rem"
          >{isUsers ?
            usersCount.toLocaleString('en-US') :
            repoCount.toLocaleString('en-US')}{isUsers ? " Users" : " repository results"}</Text>


          <VStack spacing="1.25rem">
            {
              isUsers ? users.length === 0 ? <EmptyCard /> : users.map((user: any) => <UserCard key={user.id}
                user={user}
              />)

                :

                repos.length === 0 ? <EmptyCard /> : repos.map((repo, index) =>
                  <DisplayCard
                    key={index}
                    repo={repo}
                  />
                )
            }
          </VStack>
        </Box>
      </Flex>}
    </Box>
  );
};

const DisplayCard = (props: any) => {
  const { repo } = props;
  const { node: currentRepo } = repo;

  const repoDetails = {
    stars: currentRepo?.stargazerCount || 0,
    language: currentRepo?.primaryLanguage?.name || "None",
    licence: currentRepo.licenseInfo?.name || "None",
    lastUpdate: currentRepo.updatedAt
  }

  const { stars, language, licence, lastUpdate } = repoDetails


  return <Box
    bg="#fff"
    boxShadow="0px 6px 58px rgba(196, 203, 214, 0.1)"
    borderRadius="3px"
    p="1.25rem"
    w="42.5rem"
  >
    <Text
      fontWeight="bold"
    > {currentRepo?.name} </Text>
    <Text
      color="#91929E"
      fontSize="0.875rem"
    >{currentRepo?.description} </Text>
    <Text
      color="#91929E"
      fontSize="0.75rem"
      mt="4"
    >
      {stars}  Stars | {language} | {licence} | {lastUpdate}

    </Text>
  </Box>
}

export default Results;

function kFormatter(num) {
  const kvalue = (num / 1000).toFixed(0) + "k"

  return num > 999 ?
    kvalue :
    num
}

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