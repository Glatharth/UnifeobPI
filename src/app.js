import React, { Component } from 'react';
// import './App.css';

import GlobalStyle from './styles/global';
import Routes from './routes';

class App extends Component {
  render() {
    return (
    <>
      <Routes />


      <GlobalStyle />
    </>
    );
  }
}

export default App;
