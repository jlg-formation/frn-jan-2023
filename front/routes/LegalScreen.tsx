import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {gs} from '../styles';
import {RootStackParamList} from './navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Legal'>;

const LegalScreen = ({navigation}: Props) => {
  useEffect(() => {
    console.log('instantiate legal screen');
  }, []);
  const onPress = () => {
    console.log('about to go to settings page');
    navigation.navigate('Settings');
  };
  return (
    <View style={styles.view}>
      <Text style={[gs.text, styles.text]}>Legal screen</Text>
      <Pressable onPress={onPress}>
        <Text>Go to Settings</Text>
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

export default LegalScreen;
