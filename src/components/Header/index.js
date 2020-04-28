import React from 'react';
import {View, Image, StatusBar, TouchableOpacity} from 'react-native';
import style from './style';

function Header({children, navigation}) {
  const statusHeight = StatusBar.currentHeight;
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View style={[{height: statusHeight}, style.placeholder]} />
      <View style={style.nav}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={style.backIcon}
            source={require('../../assets/img/icon-back.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;
