import * as React from 'react';
import {DrawerActions} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import {Image, StyleSheet} from 'react-native';

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

const AppHeader = (props) => {
  // const _goBack = () => console.log('Went back');

  const _openMenu = () =>
    props.navigation.dispatch(DrawerActions.toggleDrawer());

  return (
    <Appbar style={styles.base}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Action icon="menu" onPress={_openMenu} />
    </Appbar>
  );
};

export default AppHeader;
