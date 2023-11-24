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
      <ApolloProvider client={client}>
        <AuthContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthContextProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
