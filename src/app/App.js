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

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

function App() {
  return (
    <Router>
      <Route
        path="/"
        children={({ match, ...rest }) => (
          <TransitionGroup component={firstChild}>
            {match && <Header {...rest} />}
          </TransitionGroup>
        )}
      />
      <div className="container-fluid">
        <div className="row flex-xl-nowrap">
          <Sidebar />
          <main className="col-12 col-md-9 col-xl-10">
            <Route path="/basics" component={Basics} />
            <Route path="/generation" component={Generation} />
            <Route path="/application" component={Application} />
            <Route path="/credits" component={Credits} />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
