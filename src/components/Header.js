import React, { Component } from "react";
import darkmode from "./darkmode.png";
import lightmode from "./lightmode.png";
import appicon from './appicon.png'

import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: "",
    };
  }

  componentDidMount() {
    // Set the active link based on the current location pathname
    const { pathname } = this.props.location;
    this.setState({ activeLink: pathname });
  }

  handleLinkClick = (link) => {
    this.setState({ activeLink: link });
  };
  render() {
    const { mode, darkmode1 } = this.props;
    const { activeLink } = this.state;
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} fixed-top`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
           <img src={appicon} alt="" style={{height:'40px'}}/> NEW EXPRESS
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li> */}

                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      activeLink === "/business" ? "active" : ""
                    }`}
                    to="/business"
                    onClick={() => this.handleLinkClick("/business")}
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      activeLink === "/entertainment" ? "active" : ""
                    }`}
                    to="/entertainment"
                    onClick={() => this.handleLinkClick("/entertainment")}
                  >
                    Entertainment
                  </Link>
                </li>
                {/* <li className="nav-item">
          <Link className="nav-link" to="/general">General</Link></li> */}
                <li
                  className="nav-item"
                >
                  <Link className={`nav-link ${
                    activeLink === "/health" ? "active" : ""
                  }`} to="/health"
                  onClick={() => this.handleLinkClick("/health")}
                  >
                    Health
                  </Link>
                </li>
                <li
                  className="nav-item"
                >
                  <Link className={`nav-link ${
                    activeLink === "/science" ? "active" : ""
                  }`} to="/science"
                  onClick={() => this.handleLinkClick("/science")}
                  >
                    Science
                  </Link>
                </li>
                <li
                  className="nav-item"
                >
                  <Link className={`nav-link ${
                    activeLink === "/sports" ? "active" : ""
                  }`} to="/sports"
                  onClick={() => this.handleLinkClick("/sports")}
                  >
                    Sports
                  </Link>
                </li>
                <li
                  className="nav-item"
                >
                  <Link className={`nav-link ${
                    activeLink === "/technology" ? "active" : ""
                  }`} to="/technology"
                  onClick={() => this.handleLinkClick("/technology")}
                  >
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      activeLink === "/about" ? "active" : ""
                    }`}
                    to="/about"
                    onClick={() => this.handleLinkClick("/about")}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <img
              onClick={darkmode1}
              src={mode === "light" ? darkmode : lightmode}
              alt=""
              style={{
                height: "35px",
                width: "auto",
                position: "absolute",
                right: "30px",
                cursor: "pointer",
              }}
            />
          </div>
        </nav>
      </div>
    );
  }
}
