/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Game from './Game';



 class App extends Component {
  render() {
    console.log('hey console...');
    return (
     <Game randomNumberCount = {6}/>

    );
  }
}
export default App;

