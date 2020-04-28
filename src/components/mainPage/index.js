import React from 'react';
import {View, StatusBar} from 'react-native';
import style from './style';

function MainPage({children, navHeader}) {
  const statusHeight = StatusBar.currentHeight;
  return (
    <View>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <View style={[{height: statusHeight}, style.placeholder]} />
      <View style={style.nav}>{navHeader}</View>
      {children}
    </View>
  );
}

export default MainPage;
