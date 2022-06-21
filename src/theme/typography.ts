import { Platform } from 'react-native';

/*
Available font weights

300 Light
400 Regular
500 Medium
600 SemiBold
700 Bold
*/

export const family = {
  GilroyBold: Platform.select({
    ios: 'Gilroy-Bold', // The font family name
    android: 'Gilroy-Bold', // The file name
  }),
  GilroyRegular: Platform.select({
    ios: 'Gilroy-Regular', // The font family name
    android: 'Gilroy-Regular', // The file name
  }),
  GilroySemiBold: Platform.select({
    ios: 'Gilroy-SemiBold', // The font family name
    android: 'Gilroy-SemiBold', // The file name
  }),
  GilroyMedium: Platform.select({
    ios: 'Gilroy-Medium', // The font family name
    android: 'Gilroy-Medium', // The file name
  }),
};
