import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>You're going to be a millionare</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
