import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {IMAGES} from '../../utils/images-path';
import {IMAGE_RESIZE_MODE} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';

const DrawerItem = ({item}) => {
  const navigation = useNavigation();
  const handleNavigation = screen => {
    navigation.navigate(screen);
  };
  return (
    <View key={item.id}>
      <Pressable
        onPress={() => handleNavigation(item.navigation)}
        style={styles.drawerList}>
        <View style={styles.drawerListItem}>
          <View
            style={[
              styles.screenLogo,
              {backgroundColor: item.backgroundColor},
            ]}>
            <Image source={item.image} resizeMode={IMAGE_RESIZE_MODE.CONTAIN} />
          </View>
          <Text style={styles.menuLabel}>{item.name}</Text>
        </View>
        <Image source={IMAGES.chevronRight} />
      </Pressable>
      {item.id !== 7 && <View style={styles.listItemSeparator} />}
    </View>
  );
};

export default DrawerItem;
