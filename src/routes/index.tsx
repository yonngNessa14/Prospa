import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStackScreens from './AppStack';

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="App" component={AppStackScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
