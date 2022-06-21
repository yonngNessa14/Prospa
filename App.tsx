import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from '@routes';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </SafeAreaProvider>
  );
};

export default App;
