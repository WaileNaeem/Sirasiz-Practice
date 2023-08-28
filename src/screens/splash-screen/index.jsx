import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {IMAGES} from '../../utils/images-path';
import styles from './styles';
import {IMAGE_RESIZE_MODE} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import Navigation from '../../navigation/navigation-constants';
import {useSelector} from 'react-redux';

const SplashScreen = () => {
  const navigation = useNavigation();
  const phoneNumber = useSelector(state => state.phone.phoneNumber);
  useEffect(() => {
    setTimeout(() => {
      if (phoneNumber) {
        navigation.reset({index: 0, routes: [{name: Navigation.DRAWER}]});
      } else {
        navigation.reset({index: 0, routes: [{name: Navigation.ONBOARDING}]});
      }
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={IMAGES.splashLogo}
        resizeMode={IMAGE_RESIZE_MODE.CONTAIN}
        style={styles.logo}
      />
    </View>
  );
};

export default SplashScreen;
