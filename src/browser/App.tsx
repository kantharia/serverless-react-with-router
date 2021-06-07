import "./App.css";

import React from "react";
import { Route, Switch } from "react-router-dom";

import useConfig from "../components/useConfig";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import CustomMessagePage from "./pages/CustomMessagePage";

/**
 * Our Web Application
 */
export default function App() {
  const { app } = useConfig();
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/custom-message">
        <CustomMessagePage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}
