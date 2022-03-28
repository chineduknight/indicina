import {
  gql
} from "@apollo/client";


export const REPOSITORY = gql`
query GetRepo($searchTerm:String!){
  search(query: $searchTerm, type: REPOSITORY, first: 10) {
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
  }
}
`;

export const USERS = gql`
query GetUsers($searchTerm:String!){
  search(query: $searchTerm, type: USER, first: 10) {
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
  }
}
`