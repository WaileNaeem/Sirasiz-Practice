import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Navigation from './navigation-constants';

import SplashScreen from '../screens/splash-screen';
import OnboardingScreen from '../screens/onboarding-screen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Navigation.ONBOARDING}>
      <Stack.Screen name={Navigation.SPLASH} component={SplashScreen} />
      <Stack.Screen name={Navigation.ONBOARDING} component={OnboardingScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
