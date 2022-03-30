import { useLazyQuery } from '@apollo/client';
import { Box, Flex, useBoolean } from "@chakra-ui/react";
import NavBar from 'components/NavBar';
import { useEffect, useState } from 'react';
import { REPOSITORY, USERS } from '../query';
import Loader from 'components/Loader';
import { notifyOfError } from 'utils/helpers';
import _ from "lodash";
import LeftNavigation from './LeftNavigation';
import DisplayResult from './DisplayResult';
import Paginator from 'components/Paginator'

const Results = () => {
  const [isUsersSelected, setIsUsersSelected] = useBoolean()
  const [repos, setRepos] = useState({
    pagination: {
      endCursor: "",
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: ""
    },
    data: [],
    count: 0
  });
  const [users, setUsers] = useState({
    pagination: {
      endCursor: "",
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: ""
    },
    data: [],
    count: 0
  });
  const [currentType, setCurrentType] = useState({
    pagination: {
      endCursor: "",
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: ""
    },
    data: [],
    count: 0
  });
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('searchTerm');
    if (searchTerm) {
      getRepos({
        variables: { searchTerm, first: 10 },
      });
      getUsers({
        variables: { searchTerm, first: 10 },
      });
    }
  }, [])

  const [getRepos, { loading: fetchingRepos, fetchMore }] = useLazyQuery(
    REPOSITORY,
    {
      onCompleted(res) {
        const response = res.search;
        setRepos({
          pagination: response.pageInfo,
          data: response.edges,
          count: response.repositoryCount
        });
        setCurrentType({
          pagination: response.pageInfo,
          data: response.edges,
          count: response.repositoryCount
        })
      },
      onError(error) {
        notifyOfError(error, "An Error Occured")
      },
    }
  );

  const [getUsers, { loading: fetchingUsers, fetchMore: fetchMoreUsers }] = useLazyQuery(
    USERS,
    {
      onCompleted(res) {
        const response = res.search;
        setUsers({
          pagination: response.pageInfo,
          data: response.nodes,
          count: response.userCount
        })
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
      variables: { searchTerm, first: 10 },
    });
    getUsers({
      variables: { searchTerm, first: 10 },
    });
  }
  const handleTabChange = (value: 'repo' | 'users') => {
    if (value === "users") {
      setCurrentType(users)
      return setIsUsersSelected.on();
    }
    setCurrentType(repos)
    setIsUsersSelected.off();
  }

  const onNextPage = () => {
    if (isUsersSelected) {
      return fetchMoreUsers({
        variables: {
          after: users.pagination.endCursor,
          first: 10,
          last: null
        },
        updateQuery: (_, { fetchMoreResult }) => {
          const response = fetchMoreResult.search;
          const data = {
            pagination: response.pageInfo,
            data: response.nodes,
            count: response.userCount
          }
          setUsers({
            ...data
          });
          setCurrentType({
            ...data
          });
        }
      });
    }
    fetchMore({
      variables: {
        after: repos.pagination.endCursor,
        first: 10,
        last: null
      },
      updateQuery: (_, { fetchMoreResult }) => {
        const response = fetchMoreResult.search;
        const data = {
          pagination: response.pageInfo,
          data: response.edges,
          count: response.repositoryCount
        }
        setRepos({
          ...data
        });
        setCurrentType({
          ...data
        });
      }
    });
  }
  const onPreviousPage = () => {
    if (isUsersSelected) {
      return fetchMoreUsers({
        variables: {
          before: users.pagination.startCursor,
          last: 10,
          first: null
        },
        updateQuery: (_, { fetchMoreResult }) => {
          const response = fetchMoreResult.search;
          const data = {
            pagination: response.pageInfo,
            data: response.nodes,
            count: response.userCount
          }
          setUsers({
            ...data
          });
          setCurrentType({
            ...data
          });
        }
      });
    }
    fetchMore({
      variables: {
        before: repos.pagination.startCursor,
        last: 10,
        first: null
      },
      updateQuery: (_, { fetchMoreResult }) => {
        const response = fetchMoreResult.search;
        const data = {
          pagination: response.pageInfo,
          data: response.edges,
          count: response.repositoryCount
        }
        setRepos({
          ...data
        });
        setCurrentType({
          ...data
        });
      }
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
            isActive={isUsersSelected}
            onTabChange={handleTabChange}
            repoCount={repos.count}
            usersCount={users.count}
          />
          <Box>
            <DisplayResult
              isUsers={isUsersSelected}
              usersCount={users.count}
              repoCount={repos.count}
              users={users.data}
              repos={repos.data}
            />
            <Paginator
              handlePrevious={onPreviousPage}
              handleNext={onNextPage}
              pagination={currentType.pagination}
            />
          </Box>
        </Flex>
      }
    </Box>
  );
};



export default Results;





