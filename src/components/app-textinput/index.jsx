import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGE_RESIZE_MODE} from '../../utils/constants';

const AppTextinput = ({
  image,
  title,
  style,
  disabledTextStyle,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, disabledTextStyle]}>{title}</Text>
      <View style={styles.contentContainer}>
        <Image
          source={image}
          style={styles.image}
          resizeMode={IMAGE_RESIZE_MODE.CONTAIN}
        />
        <TextInput style={styles.textInput} {...otherProps} />
      </View>
    </View>
  );
};

export default AppTextinput;
