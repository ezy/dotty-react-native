/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';

import {SafeAreaView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import AppHeader from './src/components/Header/header.component';
import ChoresList from './src/components/ChoresList/chores-list.component';
import FundsManager from './src/components/FundsManager/funds-manager.component';

import {palette} from './src/styles/colors';

const {Navigator, Screen} = createDrawerNavigator();

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
    <NavigationContainer>
      <PaperProvider theme={dottyTheme}>
        <SafeAreaView>
          <View>
            <Navigator initialRouteName="ChoresList">
              <Screen name="ChoresList" component={ChoresList} />
              <Screen name="FundsManager" component={FundsManager} />
            </Navigator>
          </View>
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
