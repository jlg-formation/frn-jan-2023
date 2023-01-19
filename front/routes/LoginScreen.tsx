import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {gs} from '../styles';

const LoginScreen = () => {
  let onSubmit = () => {
    console.log('coucou');
  };

  return (
    <View style={styles.view}>
      <Text style={text}>Connexion</Text>
      <View style={gs.form}>
        <View style={gs.label}>
          <Text style={gs.text}>Login</Text>
          <TextInput style={gs.textInput} placeholder="Ex: jlguenego" />
        </View>
        <View style={gs.label}>
          <Text style={gs.text}>Mot de passe</Text>
          <TextInput style={gs.textInput} secureTextEntry={true} />
        </View>
        <View style={gs.submitButton}>
          <Button
            onPress={onSubmit}
            title="Se connecter"
            color="black"
            accessibilityLabel="Se connecter"
          />
        </View>
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
