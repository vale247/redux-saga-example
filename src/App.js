import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as actions from './actions';

import { connect } from "react-redux";

class App extends Component {

  componentDidMount() {
    this.props.fetchDog();
  }

  render() {
    const { fetching, dog, fetchDog, simpleFetch, error } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
            <p className="App-intro">Replace the React icon with a dog!</p>
          )}

        <p>
          {fetching ? (
            <button disabled>Fetching...</button>
          ) : (
              <button onClick={fetchDog}>Request a Dog</button>
            )}
        </p>
        <p>
          <button onClick={simpleFetch}>Simple fetch</button>
        </p>

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

export default connect(mapStateToProps, actions)(App);
