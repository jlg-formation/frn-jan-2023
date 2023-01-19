import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export default LoginScreen;
