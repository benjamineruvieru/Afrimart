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
import {Text} from 'react-native';

StatusBarController();

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.primary}
      detachInactiveScreens={false}
      screenOptions={{header: () => null}}
      barStyle={{backgroundColor: 'white'}}
      backBehavior={'initialRoute'}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon type={Icons.Foundation} name="home" color={color} />
          ),
          tabBarLabel: (
            <Text style={{fontFamily: 'Gilmer Medium', textAlign: 'center'}}>
              Home
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon type={Icons.Entypo} name="shop" color={color} />
          ),
          tabBarLabel: (
            <Text style={{fontFamily: 'Gilmer Medium', textAlign: 'center'}}>
              Market
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon type={Icons.Octicons} name="person" color={color} />
          ),
          tabBarLabel: (
            <Text style={{fontFamily: 'Gilmer Medium', textAlign: 'center'}}>
              Profile
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              type={Icons.FontAwesome}
              name="group"
              color={color}
              size={19}
            />
          ),
          tabBarLabel: (
            <Text style={{fontFamily: 'Gilmer Medium', textAlign: 'center'}}>
              Community
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
