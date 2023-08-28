import {Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {COLORS} from '../../utils/colors';

const IconComponent = ({name, backgroundColor, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.iconContainer, {backgroundColor}]}>
      <Icon name={name} size={20} color={COLORS.black2} />
    </Pressable>
  );
};

export default IconComponent;
