import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View ,Picker, StyleSheet} from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', language:''};
   
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40,backgroundColor:'#1fa38f',color:"#FFFFFF", borderRadius: 4,
          borderBottomColor: '#fff',
            borderBottomWidth: StyleSheet.hairlineWidth,}}
          placeholder="Name"
          onChangeText={(name) => this.setState({name})}
        />
        <Picker  style={{borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',}}
 selectedValue={this.state.language} onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                <Picker.Item label="San Jose" value="SJ" />
                <Picker.Item label="San Francisco" value="SF" />
                <Picker.Item label="San Bernandino" value="SB" />
                <Picker.Item label="Los Angeles" value="LA" />
                <Picker.Item label="San Diego" value="SD  " />
        </Picker>
      
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.name.split(' ').map((word) => word && '😀').join(' ')}
        </Text>
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.language}
        </Text>
        
      </View>
    );
  }
}

// skip this line if using Create React Native App

