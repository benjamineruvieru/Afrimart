import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import MainName from '../assets/images/afrimart.png';

export const BackView = props => {
  return <View style={styles.backviewStyles}>{props.children}</View>;
};

export const ButtonView = () => {
  return (
    <TouchableOpacity style={{...styles.buttonviewStyle, ...props.style}}>
      {props.children}
    </TouchableOpacity>
  );
};

export const Logoname = () => {
  return <Image source={MainName} style={styles.logonameStyles} />;
};

export const TabView = props => {
  return <View style={styles.tabviewStyles}>{props.children}</View>;
};

const styles = StyleSheet.create({
  backviewStyles: {
    flex: 1,
    padding: 16,
  },

  logonameStyles: {
    height: 40,
    width: 110,
  },

  tabviewStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
