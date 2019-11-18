import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import $ from "jquery";
import "./Sidebar.scss";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar" className="col-12 col-md-3 col-xl-2">
        <div className="sidebar-header">
          <h4>Generation of Electricity</h4>
        </div>

        <nav class="sidebar-nav">
          <div className="nav-item">
            <Link to="/basics" className="nav-link" page="basics">
              Basics
            </Link>
            <ul
              className={
                "sub-nav " +
                (this.props.location.pathname === "/basics" ? "active" : "")
              }
            >
              <li>
                <a>Definitions</a>
              </li>
            </ul>
          </div>
          <div className="nav-item">
            <Link
              to="/generation"
              className="nav-link"
              page="generation-of-electricity"
            >
              Electricity Generation
            </Link>
            <ul
              className={
                "sub-nav " +
                (this.props.location.pathname === "/generation" ? "active" : "")
              }
            >
              <li>
                <a>Generation</a>
              </li>
              <li>
                <a>Faraday's Law</a>
              </li>
            </ul>
          </div>
          <div className="nav-item">
            <Link to="/application" className="nav-link" page="application">
              Applications
            </Link>
            <ul
              className={
                "sub-nav " +
                (this.props.location.pathname === "/application"
                  ? "active"
                  : "")
              }
            >
              <li>
                <a>Light</a>
              </li>
              <li>
                <a>Motor</a>
              </li>
            </ul>
          </div>
          <div className="nav-item">
            <Link to="/credits" className="nav-link" page="credits">
              Credits
            </Link>
            <ul
              className={
                "sub-nav " +
                (this.props.location.pathname === "/credits" ? "active" : "")
              }
            >
              <li>
                <a>Sources</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Sidebar);
