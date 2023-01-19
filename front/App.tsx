/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import HomeScreen from './routes/HomeScreen';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import LoginScreen from './routes/LoginScreen';
import SplashScreen from './routes/SplashScreen';
import LegalScreen from './routes/LegalScreen';
import SettingsScreen from './routes/SettingsScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider style={styles.safeAreaView}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={'red'}
        />
        {isLoading ? (
          <SplashScreen />
        ) : isConnected ? (
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Legal" component={LegalScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        ) : (
          <LoginScreen />
        )}
      </SafeAreaProvider>
    </NavigationContainer>
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
