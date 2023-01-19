/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import HomeScreen from './routes/HomeScreen';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import LegalScreen from './routes/LegalScreen';
import LoginScreen from './routes/LoginScreen';
import {RootStackParamList} from './routes/navigation';
import SettingsScreen from './routes/SettingsScreen';
import SplashScreen from './routes/SplashScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

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
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Legal" component={LegalScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
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
