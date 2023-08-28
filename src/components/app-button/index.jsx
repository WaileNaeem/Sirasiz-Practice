import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const AppButton = ({
  color,
  title,
  onPress,
  style,
  textColor,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}, style]}
      onPress={onPress}
      {...otherProps}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
