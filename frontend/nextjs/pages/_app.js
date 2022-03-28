import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Layout from "../src/layouts/layouts";
import { Provider, useDispatch } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../src/store/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer
              position="bottom-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              draggable={false}
              pauseOnVisibilityChange
              closeOnClick
              pauseOnHover
            />
          </Layout>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
