import React from "react";
import { Global, css } from "@emotion/react";
import {
  Box,
  ColorModeProvider,
  CSSBaseline,
  ThemeProvider,
  useColorMode,
  useTheme
} from "@trendmicro/react-styled-ui";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache()
});

const Layout = (props) => {
  const { colorMode } = useColorMode();
  const { fontSizes, lineHeights } = useTheme();
  const backgroundColor = {
    light: "white",
    dark: "gray:100"
  }[colorMode];
  const color = {
    light: "black:primary",
    dark: "white:primary"
  }[colorMode];

  return (
    <>
      <Global
        styles={css`
          body {
            font-size: ${fontSizes.sm};
            line-height: ${lineHeights.sm};
          }
        `}
      />
      <Box
        backgroundColor={backgroundColor}
        color={color}
        fontSize="sm"
        lineHeight="sm"
        height="100vh"
        {...props}
      />
    </>
  );
};

const CustomApp = (props) => (
  <ThemeProvider>
    <ColorModeProvider value="dark">
      <CSSBaseline />
      <Layout>
        <ApolloProvider client={client}>
          <App {...props} />
        </ApolloProvider>
      </Layout>
    </ColorModeProvider>
  </ThemeProvider>
);

export default CustomApp;
