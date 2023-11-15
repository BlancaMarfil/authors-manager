import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "../apollo-client";

function MyApp({ Component, pageProps }) {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
