import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const ErrorMessage = ({message}) => {
  return <Text style={styles.errorMessage}>{message}</Text>;
};

export default ErrorMessage;
