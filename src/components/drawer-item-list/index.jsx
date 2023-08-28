import React from 'react';
import {drawerScreens} from '../../utils/drawer-screens';
import DrawerItem from '../drawer-item';
import {FlatList, View} from 'react-native';
import ItemSeparator from '../item-separator';

const DrawerItemList = () => {
  return (
    <View>
      <FlatList
        data={drawerScreens}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <ItemSeparator />}
        renderItem={({item}) => <DrawerItem item={item} />}
      />
    </View>
  );
};

export default DrawerItemList;
