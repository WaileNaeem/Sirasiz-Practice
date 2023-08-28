import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from './styles';

const AppScreen = ({children, style}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={[styles.screen, style]}>
        <StatusBar barStyle={'default'} />
        {children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AppScreen;
