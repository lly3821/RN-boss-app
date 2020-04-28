import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Work, Find, Message, Mine} from './src/pages';

const Tab = createBottomTabNavigator();

export default function AppTabNavigator() {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Work') {
            return focused ? (
              <Image source={require('./src/assets/img/icon-zw-act.png')} />
            ) : (
              <Image source={require('./src/assets/img/icon-zw.png')} />
            );
          }
          if (route.name === 'Find') {
            return focused ? (
              <Image source={require('./src/assets/img/icon-fx-act.png')} />
            ) : (
              <Image source={require('./src/assets/img/icon-fx.png')} />
            );
          }
          if (route.name === 'Message') {
            return focused ? (
              <Image source={require('./src/assets/img/icon-xx-act.png')} />
            ) : (
              <Image source={require('./src/assets/img/icon-xx.png')} />
            );
          }
          if (route.name === 'Mine') {
            return focused ? (
              <Image source={require('./src/assets/img/icon-wd-act.png')} />
            ) : (
              <Image source={require('./src/assets/img/icon-wd.png')} />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#333',
        inactiveTintColor: '#333',
      }}>
      <Tab.Screen
        name="Work"
        component={Work}
        options={{tabBarLabel: '职位'}}
      />
      <Tab.Screen
        name="Find"
        component={Find}
        options={{tabBarLabel: '发现'}}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{tabBarLabel: '消息'}}
      />
      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{tabBarLabel: '我的'}}
      />
    </Tab.Navigator>
  );
}
