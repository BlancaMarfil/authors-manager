import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://localhost:5000/authors-manager/europe-west1/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;