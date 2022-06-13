import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const GreetingName = props => {
  return <Text style={styles.greetingnameStyle}>Hi, {props.name}</Text>;
};

const styles = StyleSheet.create({
  greetingnameStyle: {
    fontFamily: 'Gilmer Bold',
    fontSize: 20,
  },
});
