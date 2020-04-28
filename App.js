import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {
  WorkInnerScreen,
  FindInnerScreen,
  MessageInnerScreen,
  MineInnerScreen,
} from './src/pages';
import AppTabNavigatorScreen from './AppTabNavigator';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Home" component={AppTabNavigatorScreen} />
        {WorkInnerScreen}
        {FindInnerScreen}
        {MessageInnerScreen}
        {MineInnerScreen}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
