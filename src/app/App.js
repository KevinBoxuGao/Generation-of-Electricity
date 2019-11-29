import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.scss";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Basics from "./basics/Basics";
import Generation from "./generation/Generation";
import Application from "./application/Application";
import Credits from "./credits/Credits";

//dev
import { hot } from "react-hot-loader";

/*
<Route exact
  path="/"
  children={({ match, ...rest }) => (
    <TransitionGroup component={firstChild}>
      {match && <Header {...rest} />}
    </TransitionGroup>
  )}
/>
*/

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

function App() {
  return (
    <Router>
      <Route exact path="/Generation-of-Electricity" component={Header} />
      <div className="container-fluid">
        <div className="row flex-xl-nowrap">
          <Sidebar />
          <main className="col-12 col-md-9 col-xl-10">
            <Route
              path="/Generation-of-Electricity/basics"
              component={Basics}
            />
            <Route
              path="/Generation-of-Electricity/generation"
              component={Generation}
            />
            <Route
              path="/Generation-of-Electricity/application"
              component={Application}
            />
            <Route
              path="/Generation-of-Electricity/credits"
              component={Credits}
            />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
