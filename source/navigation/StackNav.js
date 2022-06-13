import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNav';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab"
        detachInactiveScreens={false}
        screenOptions={{header: () => null}}>
        <Stack.Screen name="TabNav" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
