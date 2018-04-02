/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Game from './Game';
import AForm from './AForm';
//import AnotherButton from './AnotherButton';
//import Flexbox from './Flexbox';
//import Pizza from './Pizza'
import { AppRegistry, Text, View } from 'react-native';


 class App extends Component {
  render() {
    console.log('hey console...');
    return (
      <View style={{backgroundColor:'#B9CCD5'}}>
       <AForm/>
    </View>
    );
  }
}
export default App;

