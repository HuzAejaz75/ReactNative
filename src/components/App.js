/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Game from './Game';
import AForm from './AForm';
import FadeInView from './FadeInView';
import Keyboards from './Keyboards';
//import AnotherButton from './AnotherButton';
//import Flexbox from './Flexbox';
//import Pizza from './Pizza'
import { AppRegistry, Text, View ,TextInput} from 'react-native';


 class App extends Component {
  render() {
    console.log('hey console...');
    return (
      <View style={{backgroundColor:'#B9CCD5'}}>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}/>
        <Keyboards/>
     </View>
    );
  }
}
export default App;

