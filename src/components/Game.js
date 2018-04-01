/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
 class Game extends Component {
     static propTypes = {
        randomNumberCount: PropTypes.number.isRequired,
     }
randomNumbers = Array.from({length  : this.props.randomNumberCount}).map(()=>1 + Math.floor(10*Math.random()))
target = this.randomNumbers.slice(0,this.props.randomNumberCount-2).reduce((acc,cur)=> acc+cur,0);
  render() {
    console.log('hey console...');
    return (
    <View style={styles.container}>
            <Text style = {styles.target}>
                {this.target}
            </Text>
            {this.randomNumbers.map((val, index)=>
               
                <Buttons key={index} number ={val}></Buttons>
            )}
    </View>

     
    );
  }
}
const styles = StyleSheet.create({
   container:{
       backgroundColor: '#ddd',
       flex:1,
       marginHorizontal: 10,
       marginTop:10,
      
       
   },
   target: {
       fontSize: 40,
       backgroundColor: '#ddf',
       textAlign: 'center'
   }
});
 export default Game;