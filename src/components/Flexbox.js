import React, { Component } from 'react';
import Game from './Game';
import AnotherButton from './AnotherButton';
import { AppRegistry, Text, TextInput, View, StyleSheet,Image } from 'react-native';


 class Flexbox extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:150
        
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        
        <Image source={require('./icon.png')} style={{width: 150, height: 150,  alignItems: 'center'}}/>
      </View>
    );
  }
}

export default Flexbox;