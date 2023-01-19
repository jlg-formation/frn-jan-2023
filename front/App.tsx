/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import LoginScreen from './routes/LoginScreen';
import SplashScreen from './routes/SplashScreen';

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'red'}
      />
      {isLoading ? <SplashScreen /> : <LoginScreen />}
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
  },
  textInput: {},
});
