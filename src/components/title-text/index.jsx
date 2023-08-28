import {Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Description from '../description';

const Paragraph = ({title, paragraph}) => {
  return (
    <>
      <Text style={styles.text}>{title}</Text>
      <Description text={paragraph} />
    </>
  );
};

export default Paragraph;
