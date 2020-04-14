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

import {NavDrawer} from './src/components/molecules/drawer.component';
import {StackNavigator} from './src/components/molecules/navigation.component';

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

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <PaperProvider theme={dottyTheme}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <NavDrawer {...props} />}>
          <Drawer.Screen name="Home" component={StackNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
