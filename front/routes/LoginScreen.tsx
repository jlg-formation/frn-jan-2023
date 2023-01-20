import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {api} from '../api';
import {userState} from '../store/AuthenticationState';
import {gs} from '../styles';

const LoginScreen = () => {
  const [, setUser] = useRecoilState(userState);
  const [email, setEmail] = useState('jlg@jlg.com');
  const [password, setPassword] = useState('');
  const onSubmit = async () => {
    try {
      console.log('coucou');
      const result = await api.connect(email, password);
      setUser(result);
    } catch (err) {
      console.log('err: ', err);
      setUser(undefined);
    }
  };

  return (
    <View style={styles.view}>
      <Text style={text}>Connexion</Text>
      <View style={gs.form}>
        <View style={gs.label}>
          <Text style={gs.text}>Email</Text>
          <TextInput
            style={gs.textInput}
            placeholder="Ex: jlg@jlg.com"
            defaultValue="jlg@jlg.com"
            onChangeText={setEmail}
          />
        </View>
        <View style={gs.label}>
          <Text style={gs.text}>Mot de passe</Text>
          <TextInput
            style={gs.textInput}
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </View>
        <Pressable
          style={({pressed}) =>
            pressed ? [gs.submitButton, {opacity: 0.8}] : gs.submitButton
          }
          onPress={onSubmit}
          accessibilityLabel="Se connecter">
          <Text style={gs.submitButtonText}>Se connecter</Text>
        </Pressable>
      </View>
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
  textInput: {},
});

const text = StyleSheet.compose(gs.text, styles.text);

export default LoginScreen;
