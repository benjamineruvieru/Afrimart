import React from 'react';
import Icon, {Icons} from './Icons';
import {ButtonView} from './Components';

export const CancelButton = props => {
  return (
    <ButtonView style={{padding: 0}} function={props.function}>
      <Icon
        type={Icons.AntDesign}
        name={'close'}
        color={Colors.white}
        size={13}
      />
    </ButtonView>
  );
};

export const DeleteButton = props => {
  return (
    <ButtonView style={{paddingVertical: 0}} function={props.function}>
      <Icon
        type={Icons.MaterialCommunityIcons}
        name={'delete'}
        color={Colors.bluegrey}
        size={22}
      />
    </ButtonView>
  );
};

export const NotificationButton = props => {
  return (
    <ButtonView style={{padding: 0}} function={props.function}>
      <Icon
        type={Icons.AntDesign}
        name={'close'}
        color={Colors.white}
        size={13}
      />
    </ButtonView>
  );
};

export const SaveButton = props => {
  return (
    <ButtonView
      style={{
        backgroundColor: Colors.primary,
        borderRadius: 25,
        marginRight: 10,
      }}
      function={props.function}>
      <Icon type={Icons.Entypo} name={'check'} color={Colors.white} size={15} />
    </ButtonView>
  );
};

export const SearchButton = props => {
  return (
    <ButtonView style={{marginRight: 30}} function={props.function}>
      <Icon type={Icons.Ionicons} name={'search'} color={Colors.white} />
    </ButtonView>
  );
};

export const SettingsButton = props => {
  return (
    <ButtonView function={props.function}>
      <Icon type={Icons.Feather} name={'settings'} color={Colors.white} />
    </ButtonView>
  );
};
