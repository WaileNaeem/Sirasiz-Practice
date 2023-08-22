import React from 'react';
import {Image, Text, View, useWindowDimensions} from 'react-native';
import styles from './styles';
import {IMAGE_RESIZE_MODE} from '../../utils/constants';

const SliderItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image
        resizeMode={IMAGE_RESIZE_MODE.CONTAIN}
        style={[styles.image, {width}]}
        source={item.image}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export default SliderItem;
