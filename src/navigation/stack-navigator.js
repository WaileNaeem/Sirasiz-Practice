import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Navigation from './navigation-constants';
import SplashScreen from '../screens/splash-screen';
import OnboardingScreen from '../screens/onboarding-screen';
import LoginScreen from '../screens/login-screen';
import TermsConditionScreen from '../screens/terms-and-condtion-screen';
import PrivacyPolicy from '../screens/privacy-policy-screen';
import OTPVerificationScreen from '../screens/otp-verification-screen';
import UpdateProfile from '../screens/update-profile-screen';
import DrawerNavigator from './drawer-navigator';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Navigation.SPLASH}>
      <Stack.Screen name={Navigation.DRAWER} component={DrawerNavigator} />
      <Stack.Screen name={Navigation.SPLASH} component={SplashScreen} />
      <Stack.Screen name={Navigation.ONBOARDING} component={OnboardingScreen} />
      <Stack.Screen name={Navigation.LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={Navigation.TERMS_AND_CONDITION}
        component={TermsConditionScreen}
      />
      <Stack.Screen
        name={Navigation.PRIVACY_POLICY}
        component={PrivacyPolicy}
      />
      <Stack.Screen
        name={Navigation.OTP_VERIFICATION}
        component={OTPVerificationScreen}
      />
      <Stack.Screen
        name={Navigation.UPDATE_PROFILE}
        component={UpdateProfile}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
