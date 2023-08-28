import {Text} from 'react-native';
import React from 'react';
import styles from './styles';

const ClickableText = ({text, onPress}) => {
  return (
    <Text onPress={onPress} style={styles.text}>
      {text}
    </Text>
  );
};

export default ClickableText;
