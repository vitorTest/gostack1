import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

// console.tron.log('Hello World');
console.tron.log('Hello World');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>You're going to be a millionare</Text>
      <Text style={styles.welcome}>Soon</Text>
    </View>
  );
}
