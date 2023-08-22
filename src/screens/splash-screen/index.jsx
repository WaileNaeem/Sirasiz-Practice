import React from 'react';
import {View, Image} from 'react-native';
import {IMAGES} from '../../utils/images-path';
import styles from './styles';
import {IMAGE_RESIZE_MODE} from '../../utils/constants';

const SplashScreen = () => {
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
