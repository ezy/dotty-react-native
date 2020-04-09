/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import AppHeader from './src/components/Header/header.component';
import {palette} from './src/styles/colors';
import {SafeAreaView, ScrollView, View} from 'react-native';

const {yellow} = palette;

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
      <SafeAreaView>
        <View>
          <AppHeader />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
