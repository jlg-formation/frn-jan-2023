import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gs} from '../styles';

const SettingsScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={[gs.text, styles.text]}>Settings</Text>
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

export default SettingsScreen;
