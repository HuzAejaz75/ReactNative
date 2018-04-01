
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import {Text,TouchableOpacity, StyleSheet} from 'react-native';


 class Buttons extends Component {
     static propTypes = {
            number : PropTypes.number.isRequired,

     };
     handlePress=()=>{
        console.log(this.props.number);
     }
  render() {
    console.log('hey console...');
    return (
    <TouchableOpacity onPress = {this.handlePress} >
        <Text style={styles.random}>{this.props.number}</Text>
    </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    random:{
        fontSize: 40,
        backgroundColor: '#ddd',
        marginLeft: 10,
        marginHorizontal: 10,
        marginTop:10,
       }
});
export default Buttons;