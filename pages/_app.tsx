import { ThemeProvider } from "styled-components";
import defaultTheme from "../styles/theme";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
import { AuthContextProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthContextProvider>
        <Layout>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Layout>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
