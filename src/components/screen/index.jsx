import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styles from './styles';

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar barStyle={'default'} />
      {children}
    </SafeAreaView>
  );
};

export default Screen;
