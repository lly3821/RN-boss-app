import React, {Fragment, useState} from 'react';
import {Text, View, Image} from 'react-native';
import {MainPage} from '../../../components';
import style from './style';

function Message() {
  const [active, setActive] = useState(0);

  const navHeader = (
    <Fragment>
      <View style={style.flexRow}>
        <Text
          style={[
            style.ftWhite,
            style.marR20,
            style.ft16,
            active === 0 && style.ft20,
          ]}
          onPress={() => setActive(0)}>
          聊天
        </Text>
        <Text
          style={[style.ftWhite, style.ft16, active === 1 && style.ft20]}
          onPress={() => setActive(1)}>
          互动
        </Text>
      </View>
      <Image source={require('../../../assets/img/icon-news.png')} />
    </Fragment>
  );

  return <MainPage navHeader={navHeader}></MainPage>;
}

export default Message;
