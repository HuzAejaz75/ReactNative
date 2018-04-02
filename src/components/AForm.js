import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Switch,
    StatusBar,
    Slider,
    ProgressViewIOS,
    DatePickerIOS
  } from 'react-native';
 
 class AForm extends Component {
     static propTypes = {
        randomNumberCount: PropTypes.number.isRequired,
     }
     constructor(){
         super();
         this.state = {
             check: false
         }
         this.state = { chosenDate: new Date() };
    
         this.setDate = this.setDate.bind(this);
     }

     
    
      setDate(newDate) {
        this.setState({chosenDate: newDate})
      }
     checkBoxTest(){
         this.setState({
             check: !this.state.check
         })
         alert("switch works")
     }
  render() {
    console.log('hey console...');
    return (
    <View style={styles.container}>
           <Switch value = {this.state.check} onChange={()=>this.checkBoxTest()}/>
           <Text style={styles.mover}>The work that needs to be done </Text>
           <StatusBar backgroundColor="blue" barStyle="light-content"/><Text>Work is beign done</Text>
            <Slider minimumValue={0} maximumValue={100} step={5}/>
            <ProgressViewIOS style={styles.progressView} progress={0.98}/>
            <DatePickerIOS date={this.state.chosenDate}
          onDateChange={this.setDate}/>

    </View>

     
    );
  }
}
const styles = StyleSheet.create({
   container:{
       backgroundColor: '#B9CCD5',
       height:500,
       width:500
   },
   mover:{
       marginTop: 30,
       marginLeft:25
   },
   progressView:{
       width:380
   }
});
 export default AForm;