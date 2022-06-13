import {Image, Text} from 'react-native';
import React from 'react';
import {BackView, TabView} from '../components';
import {Logoname} from '../components/Components';
import Avatar from '../assets/images/avatar.png';
import {GreetingName} from '../components/HomeCom/Components';
import {NotificationButton} from '../components/IconButton';
const HomeScreen = () => {
  return (
    <BackView>
      <TabView>
        <Image source={Avatar} style={{height: 40, width: 40}} />
        <Logoname />
        <NotificationButton />
      </TabView>
      <GreetingName name={'Chisom'} />
    </BackView>
  );
};

export default HomeScreen;
