import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Links from './Links';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={'https://lookformovie.herokuapp.com/'}>
        <div className="App">
            <Links />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
