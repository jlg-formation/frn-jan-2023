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
        <Text style={gs.link}>Go to Settings</Text>
        <Text style={gs.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          illo magnam itaque blanditiis provident. Non, repellat eum illo
          impedit nesciunt quam fuga laborum temporibus sunt accusantium saepe
          minus eius tempore, commodi officia suscipit sit modi! Vero eum eius
          fuga reiciendis, tempore, iure distinctio exercitationem possimus
          repudiandae quaerat vel expedita maiores alias voluptates. Enim
          debitis deleniti nesciunt accusamus! Molestias consequuntur itaque
          optio sapiente cumque quas quae mollitia, vel, ea minima quis dolore
          illo nam beatae voluptatibus vitae commodi veniam a soluta sunt
          asperiores fugiat velit temporibus deserunt. Explicabo iure ipsa
          quisquam! Velit in obcaecati aperiam atque vel alias nobis minima
          quas.
        </Text>
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
