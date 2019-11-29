import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import $ from "jquery";
import "./Sidebar.scss";

class Sidebar extends Component {
  subNavClick = section => {
    $("#" + section).gotoAnchor();
  };

  render() {
    return (
      <div id="sidebar" className="col-12 col-md-3 col-xl-2">
        <div className="sidebar-header">
          <h4>Generation of Electricity</h4>
          <button
            className="btn toggle-sidebar"
            onClick={() => $("#sidebar nav").toggleClass("active")}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <nav className="sidebar-nav">
          <div
            className={
              "nav-item " +
              (this.props.location.pathname === "/basics" ? "active" : "")
            }
          >
            <Link
              to="Generation-of-Electricity/basics"
              className={
                "nav-link " +
                (this.props.location.pathname === "/basics" ? "active" : "")
              }
              page="basics"
            >
              Basics
            </Link>
            <ul
              className={
                "sub-nav " +
                (this.props.location.pathname === "/basics" ? "active" : "")
              }
            >
              <li>
                <a href="#definitions">Definitions</a>
              </li>
            </ul>
          </div>

          <div
            className={
              "nav-item " +
              (this.props.location.pathname === "/generation" ? "active" : "")
            }
          >
            <Link
              to="Generation-of-Electricity/generation"
              className={
                "nav-link " +
                (this.props.location.pathname === "/generation" ? "active" : "")
              }
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
                <a href="#generation">Generation</a>
              </li>
              <li>
                <a href="#faradays-law">Faraday's Law</a>
              </li>
            </ul>
          </div>

          <div
            className={
              "nav-item " +
              (this.props.location.pathname === "/application" ? "active" : "")
            }
          >
            <Link
              to="Generation-of-Electricity/application"
              className={
                "nav-link " +
                (this.props.location.pathname === "/application"
                  ? "active"
                  : "")
              }
              page="application"
            >
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
                <a href="#light">Light</a>
              </li>
              <li>
                <a href="#motor">Motor</a>
              </li>
            </ul>
          </div>

          <div
            className={
              "nav-item " +
              (this.props.location.pathname === "/credits" ? "active" : "")
            }
          >
            <Link
              to="Generation-of-Electricity/credits"
              className={
                "nav-link " +
                (this.props.location.pathname === "/credits" ? "active" : "")
              }
              page="credits"
            >
              Credits
            </Link>
            <ul
              className={
                "sub-nav " +
                (this.props.location.pathname === "/credits" ? "active" : "")
              }
            >
              <li>
                <a href="#sources">Sources</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Sidebar);
