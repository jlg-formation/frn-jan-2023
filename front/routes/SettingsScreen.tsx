import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {api} from '../api';
import {userState} from '../store/AuthenticationState';
import {gs} from '../styles';

const SettingsScreen = () => {
  const setUser = useSetRecoilState(userState);
  const onPress = async () => {
    try {
      console.log('se deconnecter');
      await api.disconnect();
    } catch (err) {
      console.log('err: ', err);
    } finally {
      setUser(undefined);
    }
  };
  return (
    <View style={styles.view}>
      <Text style={[gs.text, styles.text]}>Settings</Text>
      <Pressable
        style={({pressed}) =>
          pressed ? [gs.submitButton, {opacity: 0.8}] : gs.submitButton
        }
        onPress={onPress}
        accessibilityLabel="Se déconnecter">
        <Text style={gs.submitButtonText}>Se déconnecter</Text>
      </Pressable>
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
