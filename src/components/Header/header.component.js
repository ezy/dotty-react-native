import * as React from 'react';
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
});

export default class AppHeader extends React.Component {
  _goBack = () => console.log('Went back');

  _openMenu = () => console.log('Open menu');

  render() {
    return (
      <Appbar style={styles.base}>
        <Image source={require('../../assets/images/logo.png')} />
        <Appbar.BackAction onPress={this._goBack} />
        <Appbar.Action icon="menu" onPress={this._openMenu} />
      </Appbar>
    );
  }
}
