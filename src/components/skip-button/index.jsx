import React from 'react';
import styles from './styles';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {constants} from './constants';
import {useNavigation} from '@react-navigation/native';
import Navigation from '../../navigation/navigation-constants';

const SkipButton = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.reset({index: 0, routes: [{name: Navigation.LOGIN}]});
  };

  return (
    <TouchableWithoutFeedback onPress={handleNavigation}>
      <View style={styles.container}>
        <Text style={styles.text}>{constants.SKIP}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SkipButton;
