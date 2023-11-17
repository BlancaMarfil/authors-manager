import { ThemeProvider } from "styled-components";
import defaultTheme from "../styles/theme";
import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Author's manager</title>
        <link rel="stylesheet" href="public/fonts/Vollkorn.ttf" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
