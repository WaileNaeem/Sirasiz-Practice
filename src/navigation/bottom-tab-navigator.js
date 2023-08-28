import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Navigation from './navigation-constants';
import HomeScreen from '../screens/home-screen.jsx';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={Navigation.HOME} component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
