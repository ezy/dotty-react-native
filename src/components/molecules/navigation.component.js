import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, useTheme} from 'react-native-paper';
import {Image, StyleSheet} from 'react-native';

import ChoresList from '../templates/chores-list.component';
import FundsManager from '../templates/funds-manager.component';

const styles = StyleSheet.create({
  base: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    marginLeft: 10,
  },
});

const Stack = createStackNavigator();

export const StackNavigator = () => {
  // const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="ChoresList"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => {
          // const {options} = scene.descriptor;
          // const title =
          //   options.headerTitle !== undefined
          //     ? options.headerTitle
          //     : options.title !== undefined
          //     ? options.title
          //     : scene.route.name;

          return (
            <Appbar.Header style={styles.base}>
              {previous ? (
                <Appbar.BackAction onPress={navigation.goBack} />
              ) : (
                <Image
                  source={require('../../assets/images/logo.png')}
                  style={styles.logo}
                />
              )}
              <Appbar.Action
                icon="menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </Appbar.Header>
          );
        },
      }}>
      <Stack.Screen name="Chores list" component={ChoresList} />
      <Stack.Screen name="Funds manager" component={FundsManager} />
    </Stack.Navigator>
  );
};
