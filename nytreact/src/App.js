import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Home from './components/Home';
import Saved from './components/Saved'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>      
        <div className="App">
            <h1>New York Times Article Scrubber</h1>
            <h3>Search for and annotate articles of interest!</h3>
            <Home />
            <Saved />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;