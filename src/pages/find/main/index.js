import React, {Fragment} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import {MainPage} from '../../../components';
import style from './style';

function Find() {
  const navHeader = (
    <Fragment>
      <Text style={[style.ftWhite, style.ft20]}>发现</Text>
      <View style={[style.flexRow, style.searchWrap]}>
        <Image
          style={style.searchIcon}
          source={require('../../../assets/img/icon-search.png')}
        />
        <TextInput
          placeholderTextColor="#fff"
          style={style.searchInput}
          placeholder="搜索职位/公司/知识"
        />
      </View>
      <View style={style.flexRow}>
        <Image
          style={style.marR20}
          source={require('../../../assets/img/icon-news.png')}
        />
        <View style={style.userPic}></View>
      </View>
    </Fragment>
  );
  return <MainPage navHeader={navHeader}></MainPage>;
}

export default Find;
