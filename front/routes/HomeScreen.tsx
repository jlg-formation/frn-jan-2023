import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {gs} from '../styles';
import {RootStackParamList} from './navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  const onPress = () => {
    console.log('about to go to legal page');
    navigation.navigate('Legal');
  };
  return (
    <View style={styles.view}>
      <Text style={[gs.text, styles.text]}>Home</Text>
      <Pressable onPress={onPress}>
        <Text>Go to Legal</Text>
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

export default HomeScreen;
