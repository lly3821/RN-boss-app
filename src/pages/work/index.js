import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WorkAdd from './add';
import WorkSearch from './search';

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <>
      <Stack.Screen name="WorkAdd" component={WorkAdd} />
      <Stack.Screen name="WorkSearch" component={WorkSearch} />
    </>
  );
}

export default StackScreen();
