import React from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';

const SplashScreen = () => {
  return (
    <View>
      <Image source={require('../assets/photobook.png')} style={styles.image} />
      <Text>PhotoBook 📸</Text>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {width: 200, height: 200},
});

export default SplashScreen;
