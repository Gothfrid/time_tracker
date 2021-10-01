import * as React from "react";

import { ThemeProvider } from "@mui/material";
import { hot } from "react-hot-loader";

import AppRouter from "./Router";

import { store } from '../storage/configureStore';
import { theme } from "../utils/theme_utils";

import "./../assets/scss/App.scss";
import { Provider } from "react-redux";


class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </Provider>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);