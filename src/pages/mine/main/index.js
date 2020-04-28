import React, {Fragment} from 'react';
import {Text, View, Image} from 'react-native';
import {MainPage} from '../../../components';
import style from './style';

function Mine() {
  const navHeader = (
    <Fragment>
      <View style={[style.flexRow, style.posR]}>
        <Image
          style={style.marR20}
          source={require('../../../assets/img/icon-sm.png')}
        />
        <Image source={require('../../../assets/img/icon-sz.png')} />
      </View>
    </Fragment>
  );
  return <MainPage navHeader={navHeader}></MainPage>;
}

export default Mine;
