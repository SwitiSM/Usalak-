import React from 'react'; 
import { TextInput,View,Dimensions } from 'react-native'

var width= Dimensions.get('window').width; 
var height= Dimensions.get('window').height; 
export default class UserName extends React.Component{
   constructor(props){
       super(props)
       this.state={
           value:"",
       }
    this.changeUserName=this.changeUserName.bind(this)   
   }
   changeUserName=(value)=>{
     this.setState({value})
   }
   render(){
       return(
            <TextInput
                placeholder="User Name"
                onChangeText={this.props.UserNameValueChanged}
                value={this.state.userName}
                style={{width:0.9*width,fontSize:18,height:0.1*height,borderBottomColor:"grey",borderBottomWidth:1}}
            />     
              )
   }
}