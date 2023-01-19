import React from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.view}>
      <Image source={require('../assets/photobook.png')} style={styles.image} />
      <Text style={styles.text}>PhotoBook 😊</Text>
      <ActivityIndicator
        style={styles.activityIndicator}
        size="large"
        color="#000000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {width: 200, height: 200},
  view: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  activityIndicator: {
    marginTop: 40,
    transform: [{scaleX: 2}, {scaleY: 2}],
  },
});

export default SplashScreen;
