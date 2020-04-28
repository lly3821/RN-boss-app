import {StyleSheet} from 'react-native';
import base from '../../../assets/style/base';

export default StyleSheet.create({
  ...base,

  userPic: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    overflow: 'hidden',
  },
  searchWrap: {
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  searchIcon: {
    width: 18,
    height: 18,
  },
  searchInput: {
    color: '#fff',
    padding: 0,
    height: 30,
    marginLeft: 10,
  },
});
