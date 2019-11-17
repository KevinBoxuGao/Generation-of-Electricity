import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Basics from "./basics/Basics";
import Generation from "./generation/Generation";
import Application from "./application/Application";
import Credits from "./credits/Credits";

//dev
import { hot } from "react-hot-loader";

//function component
function App() {
  return (
    <Router>
      <Route exact path={"/"} component={Header} />

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
