import {Text} from 'react-native';
import React from 'react';
import styles from './styles';

const Description = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default Description;
