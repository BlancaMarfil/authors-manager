import { ThemeProvider } from "styled-components";
import defaultTheme from "../styles/theme";
import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";
import { Auth0ProviderWithNavigate } from "../authentication/auth0-provider-with-navigate";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Auth0ProviderWithNavigate>
          <Component {...pageProps} />
        </Auth0ProviderWithNavigate>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
