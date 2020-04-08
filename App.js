/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';

import AppHeader from './src/components/Header/Header';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const yellow = '#FFBF00';

const dottyTheme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: yellow,
    accent: '#000',
  },
};

const App = () => {
  return (
    <PaperProvider theme={dottyTheme}>
      <AppHeader />
    </PaperProvider>
  );
};

export default App;
