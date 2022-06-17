import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Colors from '../../constants/Colors';
import {Dots, Eye} from '../IconButton';
import Icon, {Icons} from '../Icons';
import CountryFlag from 'react-native-country-flag';
import {ButtonView, Triangle} from '../Components';

const Boxes = props => {
  return <View style={styles.boxesStyles}>{props.children}</View>;
};

const BoxHeadText = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={styles.boxheadtextStyles}>{props.text}</Text>
      <Dots />
    </View>
  );
};

const CurrencyText = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text style={styles.currencyStyles}>{props.currency} </Text>
      <Text style={styles.amountStyles}>{props.amount}</Text>
    </View>
  );
};

export const Deposit = props => {
  return (
    <ButtonView style={styles.dwtbuttonStyle}>
      <Icon
        type={Icons.MaterialCommunityIcons}
        name="tray-arrow-up"
        color={Colors.black}
        size={19}
      />
      <Text style={styles.dwttextStyle}>Deposit</Text>
    </ButtonView>
  );
};
export const Withdrawal = props => {
  return (
    <ButtonView style={styles.dwtbuttonStyle}>
      <Icon
        type={Icons.MaterialCommunityIcons}
        name="tray-arrow-down"
        color={Colors.black}
        size={19}
      />
      <Text style={styles.dwttextStyle}>Withdraw</Text>
    </ButtonView>
  );
};
export const Transfer = props => {
  return (
    <ButtonView style={styles.dwtbuttonStyle}>
      <Icon
        type={Icons.MaterialIcons}
        name="swap-horiz"
        color={Colors.black}
        size={20}
      />
      <Text style={styles.dwttextStyle}>Transfer</Text>
    </ButtonView>
  );
};
export const GreetingName = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
      }}>
      <Text style={styles.greetingnameStyle}>Welcome, {props.name}</Text>
      <CountryFlag isoCode="ng" size={17} style={{borderRadius: 360}} />
    </View>
  );
};

export const LocalBalance = props => {
  return (
    <Boxes>
      <BoxHeadText text={'Local Balance'} />
      <CurrencyText amount={'1,541,800.61'} currency={'₦'} />
    </Boxes>
  );
};

export const Portfolio = props => {
  return (
    <Boxes>
      <BoxHeadText text={'Total Portfolio'} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <CurrencyText amount={'10,564.91'} currency={'$'} />
        <Eye />
      </View>
      <PortfolioChange />
    </Boxes>
  );
};

const PortfolioChange = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Gilmer Medium',
          fontSize: 10,
          color: Colors.green,
        }}>
        + 5.21%
      </Text>
      <Triangle num={5.21} />
    </View>
  );
};

const styles = StyleSheet.create({
  amountStyles: {
    fontFamily: 'Gilmer Bold',
    fontSize: 18,
    color: Colors.primary,
    marginVertical: 6,
  },
  currencyStyles: {
    fontFamily: 'Gilmer Bold',
    fontSize: 14,
    color: Colors.primary,
  },
  greetingnameStyle: {
    fontFamily: 'Gilmer Bold',
    fontSize: 16,
    color: Colors.black,
  },
  boxheadtextStyles: {
    fontFamily: 'Gilmer Bold',
    color: Colors.black,
    fontSize: 12,
  },
  boxesStyles: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 13,
    marginBottom: 10,
    paddingVertical: 8,
    elevation: 3,
    flex: 1,
    marginHorizontal: 8,
  },
  dwtbuttonStyle: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 12,
    elevation: 3,
  },
  dwttextStyle: {
    fontFamily: 'Gilmer Bold',
    color: Colors.black,
    fontSize: 12,
    marginLeft: 8,
  },
});
