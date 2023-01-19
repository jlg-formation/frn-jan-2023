import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gs} from '../styles';

const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={[gs.text, styles.text]}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 5,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
