import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import Start from './screens/Start';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <Start />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
