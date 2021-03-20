import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Layout } from "../components/shared";
import "../font.css";
import theme from "../theme";

const GlobalStyle = createGlobalStyle`
* {
  font-family: "Jost", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
