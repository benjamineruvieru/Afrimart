import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  CommunityScreen,
  EscrowScreen,
  HomeScreen,
  MarketScreen,
  ProfileScreen,
} from '../screens';
import Icon, {Icons} from '../components/Icons';
import React from 'react';
import Colors from '../constants/Colors';
import {StatusBarController} from '../constants/Functions';
StatusBarController();

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      detachInactiveScreens={false}
      screenOptions={{header: () => null}}>
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Escrow" component={EscrowScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
