import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { Screen, SizedBox, SvgIcon } from '@components';

export const Home: FC = () => {
  return (
    <Screen paddingTop={true}>
      <View>
        <Text>this is the home screen</Text>
        <SizedBox height={30} />
        <SvgIcon name="mail" size={25} />
      </View>
    </Screen>
  );
};
