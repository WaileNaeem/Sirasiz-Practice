import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Slider from '../../components/onboarding-slider';
import SkipButton from '../../components/skip-button';

const OnBoardingScreen = () => {
  return (
    <View style={styles.container}>
      <Slider />
      <SkipButton />
    </View>
  );
};

export default OnBoardingScreen;
