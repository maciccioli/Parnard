import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@mui/material/styles';
import Scrollbar from "react-perfect-scrollbar";
import { Theme } from "./theme";
import i18n from './i18n';

import "react-perfect-scrollbar/dist/css/styles.css";
import GlobalCss from "./styles/jss/GlobalCss";

import LandingPage from "./home/LandingPage";


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <I18nextProvider i18n={i18n}>
        <GlobalCss>
          <Scrollbar
            className="h-full-screen scrollable-content"
            option={{ suppressScrollX: true }}
          >
            <Router>
              <Switch>
                <Route path="/" component={LandingPage} exact />
                <Redirect path="/" exact to="/" />
                {/* <Route component={Error} /> */}
              </Switch>
            </Router>
          </Scrollbar>
        </GlobalCss>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
