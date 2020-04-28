import {StyleSheet} from 'react-native';
import base from '../../../assets/style/base';

export default StyleSheet.create({
  ...base,
  iconGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconL: {
    marginRight: 10,
  },
  iconR: {
    marginLeft: 10,
  },
  vdivide: {
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 18,
  },
});
