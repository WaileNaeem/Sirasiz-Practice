import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const AppButton = ({
  color = '#ffffff',
  title = 'Sample Text',
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}, style]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
