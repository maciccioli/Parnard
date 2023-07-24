import React from "react";
import {
  Route,
  Switch,
  HashRouter as Router,Redirect
} from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import Scrollbar from "react-perfect-scrollbar";
import { Theme } from "./theme";

import "react-perfect-scrollbar/dist/css/styles.css";
import GlobalCss from "./styles/jss/GlobalCss";

import Landing1 from "./home/Landing1";


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalCss>
        <Scrollbar
          className="h-full-screen scrollable-content"
          option={{ suppressScrollX: true }}
        >
           <Router basename="/">
            <Switch>
              <Route path="/home" component={Landing1} exact />
              <Redirect path="/" exact to="home" />
              {/* <Route component={Error} /> */}
            </Switch>
          </Router>
        </Scrollbar>
      </GlobalCss>
    </ThemeProvider>
  );
}

export default App;
