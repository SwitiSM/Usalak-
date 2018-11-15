import React from 'react'
import {TouchableOpacity,Dimensions,StyleSheet,Text} from 'react-native'

const width=Dimensions.get('window').width
const height=Dimensions.get('window').height

export default class LoginBtn extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            color:"green",
            text:"login"
        }
        this.LoginAction=this.LoginAction.bind(this)
    }
    LoginAction=()=>{
        if(this.props.password == "admin" && this.props.userName=="admin"){
            this.setState({color:"green",text:"success"})
        }
        else 
        {
            this.setState({color:this.props.FailureColor,text:"retry"})
            alert("Failed Login")
        }
    }
    render(){
        return(
           <TouchableOpacity 
             onPress={this.LoginAction}
             style={{backgroundColor:this.state.color,width:0.9*width,height:0.08*height,margin:10,justifyContent:"center",alignItems:"center",marginTop:20}} >
           <Text style={{alignSelf:"center",fontSize:20,fontWeight:"400"}}>{this.state.text}</Text>
           </TouchableOpacity>
        )
    }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1'
    },
  });