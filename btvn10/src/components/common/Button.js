import React from "react";
import { Text, TouchableOpacity} from 'react-native';

const Button = ({press,children}) => {
    const {buttonStyle,textStyle} = styles;
    return (
        <TouchableOpacity 
        onPress={press }
        style = {buttonStyle}>
        <Text style = {textStyle}>
        {children}
        </Text>
      </TouchableOpacity>
        
    );
};
const styles = {
    textStyle:{
        alignSelf: 'center',
        color: 'white',
        fontSize: 27,
        fontWeight: 800,
        fontWeight: '600', 
        paddingTop: 5,
        paddingBottom: 5,
    },
    buttonStyle:{
        flex:1, // expand as much in width as it can
        backgroundColor: 'black',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'yellow',
        marginLeft: 50,
        marginRight: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
       

    }
}

export  {Button};