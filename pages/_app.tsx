import { ThemeProvider } from "styled-components";
import defaultTheme from "../styles/theme";
import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
