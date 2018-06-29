import React, {Component} from 'react';
import {Image, TouchableOpacity, Text, View} from 'react-native';
import {Button, Card, CardSection,Input} from "./common/"


class LoginForm extends Component {
    state = {firstname:''};
    state = {lastname:''};
    state = {phone:''};
    state = {email:''}; // text initalize with an empty string
    state = {password:''};
    render() {
        return(
         <Card>
              <CardSection>
                 
                 <Image
                 style = {styles.imageStyle}
                 source = {require('./common/anh.png')}
                 />
                </CardSection>
                 <CardSection>
                 <Input
                 placeholder = 'Ex.Adam'
                 lable = 'First name'
                 value = {this.state.firstname}
                 onChangeText={firstname => this.setState({firstname})}
                 />
             </CardSection> 

             <CardSection>
                 <Input
                 placeholder = 'Ex.Smith'
                 lable = 'Last name'
                 value = {this.state.lastname}
                 onChangeText={lastname => this.setState({lastname})}
                 />
             </CardSection> 
             
             <CardSection>
                 <Input
                 placeholder = 'user@gmail.com'
                 lable = 'Email'
                 value = {this.state.email}
                 onChangeText={email => this.setState({email})}
                 />
            </CardSection>
               
             <CardSection>
              <Input
                 secureTextEntry 
                 placeholder = 'password'
                 lable = 'Password'
                 value = {this.state.password}
                 onChangeText={password=> this.setState({password})}
                 />
             </CardSection>

               <CardSection>
                 <Input
                 placeholder = '0912345678'
                 lable = 'Mobile'
                 value = {this.state.phone}
                 onChangeText={phone => this.setState({phone})}
                 />
             </CardSection> 

             <CardSection>
                 <Button>
                     SIGN UP
                 </Button>
             </CardSection>
             
             
             <View style = {styles.viewStyle}>
                 <Text style = {styles.signText}>
                     Already have an acount?
                </Text>
                 
             </View>
             <View style = {styles.signView}>
                 <TouchableOpacity >
              <Text style = {styles.signText}> Sign in</Text>
              </TouchableOpacity>
                 
             </View>
         </Card>
         
        );
    }
}

const styles ={
    imageStyle: {
     flex :1,
     alignItems: 'stretch',
     height : 320,
     width:null,
    },
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        
        
    },
    signView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    }, 
    signText: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    }
}
export default LoginForm;