import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import MainName from '../assets/images/afrimart.png';
import Colors from '../constants/Colors';
import Icon, {Icons} from './Icons';

export const BackView = props => {
  return <View style={styles.backviewStyles}>{props.children}</View>;
};

export const ButtonView = props => {
  return (
    <TouchableOpacity style={{...styles.buttonviewStyle, ...props.style}}>
      {props.children}
    </TouchableOpacity>
  );
};

export const BackSliderView = ({children, height = 33}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.bluegrey,
        borderRadius: 360,
        padding: 4,
        height: height,
      }}>
      {children}
    </View>
  );
};

export const Triangle = ({num}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon
        type={Icons.Entypo}
        name={num > 0 ? 'triangle-up' : 'triangle-down'}
        color={num > 0 ? Colors.green : Colors.red}
        size={17}
      />
      <Text style={{fontFamily: 'Gilmer Medium', marginLeft: 3, fontSize: 10}}>
        24HR
      </Text>
    </View>
  );
};

export const Content = props => {
  console.log(props.item);
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        flexDirection: 'row',
        marginBottom: 10,
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <Image
        source={{uri: props.item.url}}
        style={{height: 35, width: 35, borderRadius: 360}}
        resizeMode={'contain'}
      />
      <View style={{paddingLeft: 10, backgroundColor: 'red', flex: 1}}>
        <Text
          style={{
            fontFamily: 'Gilmer Bold',
            color: Colors.primary,
            fontSize: 15,
            marginBottom: 4,
          }}>
          {props.item.name}
        </Text>
        <Text
          style={{
            fontFamily: 'Gilmer Bold',
            color: Colors.black,
            fontSize: 10,
          }}>
          {props.item.pav}% PAV
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          paddingRight: 10,
          backgroundColor: 'red',
          flex: 1,
        }}>
        <Text
          style={{
            fontFamily: 'Gilmer Bold',
            color: Colors.primary,
            fontSize: 15,
            marginBottom: 4,
          }}>
          ${props.item.amount}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'Gilmer Bold',
              color: props.item.change > 0 ? Colors.green : Colors.red,
              fontSize: 10,
            }}>
            {props.item.change}%
          </Text>
          <Triangle num={props.item.change} />
        </View>
      </View>
    </View>
  );
};

export const GreyView = props => {
  return <View style={styles.greyviewStyles}>{props.children}</View>;
};

export const Logoname = () => {
  return (
    <Image
      source={MainName}
      style={styles.logonameStyles}
      resizeMode={'contain'}
    />
  );
};

export const Tab = ({name, selected = false, width = 80, small = false}) => {
  return (
    <View
      style={{
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}>
      <Text
        style={{
          fontFamily: selected ? 'Gilmer Bold' : 'Gilmer Regular',
          color: selected ? Colors.primary : Colors.black,
          fontSize: small ? 10 : 12,
          textAlign: 'center',
        }}>
        {name}
      </Text>
    </View>
  );
};

export const TabView = props => {
  return <View style={styles.tabviewStyles}>{props.children}</View>;
};

const styles = StyleSheet.create({
  backviewStyles: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  logonameStyles: {
    height: 35,
    width: 100,
  },

  tabviewStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    elevation: 5,
    marginBottom: 5,
  },

  buttonviewStyle: {
    padding: 8,
  },

  greyviewStyles: {
    backgroundColor: Colors.grey,
    flex: 1,
    paddingHorizontal: 8,
    //borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
  },
});
