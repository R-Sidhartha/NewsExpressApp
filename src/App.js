import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import About from "./components/About";

export default class App extends Component {
  constructor() {
    super();
    const savedMode = localStorage.getItem('mode');

    // Conditionally set the mode state based on the value in localStorage
    this.state = {
      mode: savedMode === 'light' ? 'light' : 'dark',
    };
  }


  componentDidMount() {
    // Set the background color when the component first mounts
    this.updateBackgroundColor();
  }

  componentDidUpdate() {
    // Update the background color whenever the mode state changes
    this.updateBackgroundColor();
  }

  updateBackgroundColor() {
    document.body.style.background = this.state.mode === 'light' ? 'white' : 'black';
  }

  darkmode1 = () => {
    this.setState(
      (prevState) => ({
        mode: prevState.mode === 'light' ? 'dark' : 'light',
      }),
      () => {
        localStorage.setItem('mode', this.state.mode);
      }
    );
  };
  pageSize = 6;
  render() {
    return (
      <div>
        <Router>
          <Header mode={this.state.mode} darkmode1={this.darkmode1} location={window.location}/>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="home"
                  country="in"
                  category="general"
                  pageSize={this.pageSize}
                  mode={this.state.mode}
                />
              }
            />
            <Route path="/about" element={<About savedMode={this.state.mode}/>} />
            {/* Other routes */}
            {/* <Route exact path="/general" element={<News key="general" country="in" category="general" pageSize={this.pageSize} mode={this.state.mode}/>} /> */}
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  country="in"
                  category="business"
                  pageSize={this.pageSize}
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  country="in"
                  category="entertainment"
                  pageSize={this.pageSize}
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  country="in"
                  category="health"
                  pageSize={this.pageSize}
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  country="in"
                  category="science"
                  pageSize={this.pageSize}
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  country="in"
                  category="sports"
                  pageSize={this.pageSize}
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  country="in"
                  category="technology"
                  pageSize={this.pageSize}
                  mode={this.state.mode}
                />
              }
            />
          </Routes>
          <ScrollTop />
        </Router>
      </div>
    );
  }
}
