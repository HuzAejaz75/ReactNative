
import React, { Component } from 'react';
import Game from './Game';
import { AppRegistry, Text, View ,StyleSheet} from 'react-native';


 class AnotherButton extends Component {
    // how to declare an array?
    constructor(props){
        super(props);
        this.state = {frontiers: ["Biryani", "Chicken Wings","Haleem","Beef Burger","Shrimp Pasta"]};
    }
  render() {
    let front;
    front = this.state.frontiers.map((frnt)=>{
     
         return (<Text style={styles.buttons}>{frnt}</Text>);
     
    });
        return (

            <View style={styles.container}>
               {front}
               <Text>
                  
               </Text>
            </View> 
        );
    }
    
  }
  const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#FF00FF',
        marginLeft: 10,
        marginHorizontal: 10,
    },
    buttons:{
        marginTop:20,
        fontSize:20,
        backgroundColor: '#FF00FF'
    }
});
export default AnotherButton;