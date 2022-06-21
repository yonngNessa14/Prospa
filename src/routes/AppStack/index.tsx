import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens';

const AppStack = createNativeStackNavigator();
const AppStackScreens = () => {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppStackScreens;
