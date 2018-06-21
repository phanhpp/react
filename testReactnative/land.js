import React, { Component } from 'react';
import {  View, Text, } from 'react-native'
import {} from './printName'
import {duTuoi, kiemTra} from './person'
let info = {ten: 'pa', tuoi : 19, can : 180, cao: 1.52 }
export default class land extends Component {
  render() {
    return (
      <View style= {{flex:1, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
        <Text> 
             {duTuoi(info.tuoi)} 

        </Text>
        <Text>
        {kiemTra(info.can,info.cao)}
         </Text>
      </View>
    );
  }
}
