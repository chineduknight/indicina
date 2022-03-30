import {
  gql
} from "@apollo/client";


export const REPOSITORY = gql`
query GetRepo( 
    $searchTerm:String!,
    $before:String, 
    $first: Int,
    $last: Int,
    $after:String,
    ){
  search(
    query: $searchTerm, 
    type: REPOSITORY, 
    first: $first,
    last:$last,
    before:$before 
    after:$after
    ) {
    repositoryCount
    edges {
      node {
        ... on Repository {
          id
          name
          description
          stargazerCount
          primaryLanguage {
            name
          }
          licenseInfo {
            id
            name
          }
          updatedAt
        }
      }
    }
    pageInfo{
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
`;

export const USERS = gql`
query GetUsers($searchTerm:String!
    $before:String, 
    $first: Int,
    $last: Int,
    $after:String,
){
  search(query: $searchTerm, type: USER, 
    first: $first,
    last:$last,
    before:$before 
    after:$after
  ) {
    userCount
    nodes {
      __typename
      ... on User {
        id
        name
         login
        bio
      }
    }
    pageInfo{
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
`