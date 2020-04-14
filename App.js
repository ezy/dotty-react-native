/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import AppHeader from './src/components/Header/header.component';
import ChoresList from './src/components/ChoresList/chores-list.component';
import FundsManager from './src/components/FundsManager/funds-manager.component';
import NavDrawer from './src/components/Drawer/drawer.component';

import {palette} from './src/styles/colors';

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

const {Navigator, Screen} = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={dottyTheme}>
        <AppHeader />
        <Navigator drawerContent={(props) => <NavDrawer {...props} />}>
          <Screen name="ChoresList" component={ChoresList} />
          <Screen name="FundsManager" component={FundsManager} />
        </Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
