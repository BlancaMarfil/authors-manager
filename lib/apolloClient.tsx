import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({ uri: process.env.GOOGLE_BOOKS_API_URL });

const graphQLLink = createHttpLink({
  uri: process.env.GRAPHQL_ENDPOINT,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([restLink, graphQLLink]),
});

export default client;
