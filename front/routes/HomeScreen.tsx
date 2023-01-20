import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useRecoilValue} from 'recoil';
import {userState} from '../store/AuthenticationState';
import {gs} from '../styles';

const HomeScreen = () => {
  const user = useRecoilValue(userState);
  const [image, setImage] = useState(undefined as undefined | string);
  useEffect(() => {
    console.log('instantiate home screen');
  }, []);

  const onPress = async () => {
    console.log('about to open photo gallery');
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });
    console.log('result: ', result);
    if (result.assets === undefined) {
      console.log('no assets');
      return;
    }
    for (const asset of result.assets) {
      console.log('asset: ', asset);
      setImage(asset.uri);
    }
  };

  return (
    <View style={styles.view}>
      <Text style={[gs.text, styles.text]}>Welcome {user?.displayName}</Text>

      <Pressable onPress={onPress}>
        <Text>
          <Icon name="photo-camera" size={60} color="#900" />
        </Text>
      </Pressable>
      <Text>{image}</Text>
      {image && (
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      )}
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
  image: {width: 200, height: 200},
});

export default HomeScreen;
