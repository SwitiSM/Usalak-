import React from 'react'
import {TextInput,Dimensions} from 'react-native'
 
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height

export default Password =(props)=>{
    return (
        <TextInput 
        placeholder="Password"
        onChangeText={props.PasswordValueChanged}
        secureTextEntry={true}
        style={{width:0.9*width,height:0.1*height,fontSize:18,borderBottomColor:"grey",borderBottomWidth:1}}
         />
    )

}
   