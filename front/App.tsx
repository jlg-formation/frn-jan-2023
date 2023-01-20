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

import Icon from 'react-native-vector-icons/MaterialIcons';
import {RecoilRoot, useRecoilState} from 'recoil';
import {authenticationState} from './store/AuthenticationState';

const Tab = createBottomTabNavigator<RootStackParamList>();

const App = () => {
  return (
    <RecoilRoot>
      <RecoilApp />
    </RecoilRoot>
  );
};

function RecoilApp(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected] = useRecoilState(authenticationState);
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
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({color, size}) => {
                let iconName = 'home';

                if (route.name === 'Home') {
                  iconName = 'home';
                } else if (route.name === 'Settings') {
                  iconName = 'settings';
                } else if (route.name === 'Legal') {
                  iconName = 'school';
                }

                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}>
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
