import React from 'react'
import {View} from 'react-native'
import UserName from './UserName';
import Password from './Password';
import LoginBtn from './LoginBtn';

export default class LoginForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            userNameValue:"",
            passwordValue:"", 
        }
        this.UserNameValueChanged=this.UserNameValueChanged.bind(this)
        this.PasswordValueChanged=this.PasswordValueChanged.bind(this)

    }
    UserNameValueChanged=(value)=>{
     this.setState({userNameValue:value})
 
    }
    PasswordValueChanged=(value)=>{
        this.setState({passwordValue:value})
    }

    render(){
    return (
        <View>
        <UserName UserNameValueChanged={this.UserNameValueChanged}/>
        <Password PasswordValueChanged={this.PasswordValueChanged}/>
        <LoginBtn password={this.state.passwordValue} userName={this.state.userNameValue} FailureColor="red" />
        </View>
    )

    }

}