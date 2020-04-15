import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar} from 'react-native-paper';
import {Image, StyleSheet} from 'react-native';

import ChoresList from '../templates/chores-list.component';
import FundsManager from '../templates/funds-manager.component';

const styles = StyleSheet.create({
  base: {
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
            <Appbar style={styles.base}>
              {/* {previous ? (
                <Appbar.BackAction onPress={navigation.goBack} />
              ) : (
                <Image
                  source={require('../../assets/images/logo.png')}
                  style={styles.logo}
                />
              )} */}
              <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo}
              />
              <Appbar.Action
                icon="menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </Appbar>
          );
        },
      }}>
      <Stack.Screen name="ChoresList" component={ChoresList} />
      <Stack.Screen name="FundsManager" component={FundsManager} />
    </Stack.Navigator>
  );
};
