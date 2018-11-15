import React from 'react';
import { StyleSheet, Image, View,Dimensions } from 'react-native';
import LoginForm from './src/LoginFrom';

const height=Dimensions.get('window').height
const width=Dimensions.get('window').width
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image style={{height:0.4*height,width:0.7*width}} source={require("./src/resources/download.png")} />
       <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
