import {Image, Text, View, Animated, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import {BackView, TabView, GreyView} from '../components';
import {Logoname, BackSliderView, Tab, Content} from '../components/Components';
import {
  GreetingName,
  Portfolio,
  LocalBalance,
  Deposit,
  Withdrawal,
  Transfer,
} from '../components/HomeCom/Components';
import {NotificationButton, ProfileButton} from '../components/IconButton';
import Colors from '../constants/Colors';
import {WIDTH_TABS} from '../constants/Variables';
const DATA = [
  {
    name: 'Bank Cash',
    url: 'https://firebasestorage.googleapis.com/v0/b/kicks-citi.appspot.com/o/bit%2Fmoney-g9b36dec23_1920.png?alt=media&token=e17c7713-ea17-42e7-8529-9724e86fa8ec',
    amount: 8416.64,
    change: -10.16,
    pav: 31.7,
  },
  {
    name: 'PayPal',
    url: 'data:image/jpeg;base64,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',
    amount: 6133.64,
    change: -3.16,
    pav: 23.1,
  },
  {
    name: 'Skrill',
    url: 'https://logos-download.com/wp-content/uploads/2016/02/skrill-invert-logo.png',
    amount: 5124.64,
    change: 78.16,
    pav: 23.7,
  },
  {
    name: 'Payoneer',
    url: 'https://firebasestorage.googleapis.com/v0/b/kicks-citi.appspot.com/o/bit%2Fnew-brand-lobby-260x260.jpg?alt=media&token=480109bf-474a-46f8-b70a-38b838af873d',
    amount: 4035.64,
    change: 91.16,
    pav: 15.7,
  },
];

const HomeScreen = () => {
  const translateSmall = useRef(new Animated.Value(0)).current;
  const translateBig = useRef(new Animated.Value(0)).current;
  const [fiat, setFiat] = useState(true);
  const [crypto, setCrypto] = useState(false);
  const [gift, setGift] = useState(false);
  const [rewards, setRewards] = useState(false);

  const tabClick = index => {
    setCrypto(false);
    setFiat(false);
    setGift(false);
    setRewards(false);
    setTimeout(() => {
      switch (index) {
        case 0:
          setFiat(true);
          break;
        case 1:
          setCrypto(true);
          break;
        case 2:
          setGift(true);
          break;
        case 3:
          setRewards(true);
          break;
      }
    }, 100);
    Animated.timing(translateBig, {
      toValue: WIDTH_TABS * index,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  return (
    <BackView>
      <TabView>
        <ProfileButton />
        <Logoname />
        <NotificationButton />
      </TabView>

      <GreyView>
        <View style={{paddingTop: 12, paddingBottom: 12}}>
          <GreetingName name={'Chisom Udechime'} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Portfolio />
          <LocalBalance />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 25,
            paddingHorizontal: 8,
          }}>
          <Deposit />
          <Withdrawal />
          <Transfer />
        </View>
        <View style={{alignItems: 'center', marginBottom: 12}}>
          <BackSliderView>
            <Animated.View
              style={{
                backgroundColor: Colors.white,
                height: 21,
                width: WIDTH_TABS,
                borderRadius: 360,
                position: 'absolute',
                left: 3,
                top: 3,
                bottom: 3,
                elevation: 2,
                transform: [{translateX: translateBig}],
              }}></Animated.View>
            <Tab name={'Fiat'} selected={fiat} fun={tabClick} index={0} />
            <Tab name={'Crypto'} selected={crypto} fun={tabClick} index={1} />
            <Tab name={'Gift Card'} selected={gift} fun={tabClick} index={2} />
            <Tab name={'Rewards'} selected={rewards} fun={tabClick} index={3} />
          </BackSliderView>
        </View>
        <View style={{alignItems: 'flex-start', paddingLeft: 10}}>
          <BackSliderView height={25}>
            <Animated.View
              style={{
                backgroundColor: Colors.white,
                height: 19,
                width: 50,
                borderRadius: 360,
                position: 'absolute',
                left: 3,
                top: 3,
                bottom: 3,
                transform: [{translateX: translateSmall}],
              }}></Animated.View>
            <Tab name={'Wallet'} selected={true} width={50} small={true} />
            <Tab name={'Market'} width={50} small={true} />
          </BackSliderView>
        </View>
        <FlatList
          data={DATA}
          renderItem={Content}
          contentContainerStyle={{padding: 8, paddingTop: 6}}
          showsVerticalScrollIndicator={false}
        />
      </GreyView>
    </BackView>
  );
};

export default HomeScreen;
