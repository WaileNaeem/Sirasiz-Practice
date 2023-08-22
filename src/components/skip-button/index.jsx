import React from 'react';
import styles from './styles';
import {Text, TouchableWithoutFeedback, View} from 'react-native';

const SkipButton = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{`Skip >`}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SkipButton;
