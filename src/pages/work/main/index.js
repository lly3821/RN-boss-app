import React, {Fragment} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {MainPage} from '../../../components';
import style from './style';

function Work({navigation}) {
  const navHeader = (
    <Fragment>
      <Text style={[style.ftWhite, style.ft20]}>Web前端</Text>
      <View style={style.iconGroup}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.navigate('WorkAdd');
          }}>
          <Image
            style={style.iconL}
            source={require('../../../assets/img/icon-add.png')}
          />
        </TouchableOpacity>
        <View style={style.vdivide} />
        <Image
          style={style.iconR}
          source={require('../../../assets/img/icon-search.png')}
        />
      </View>
    </Fragment>
  );

  return <MainPage navHeader={navHeader}></MainPage>;
}

export default Work;
