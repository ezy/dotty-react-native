import * as React from 'react';
import {Drawer} from 'react-native-paper';

import {ActionButton} from '../../primitives/button.primitive';

export default class AppDrawer extends React.Component {

  render() {
    const _openMenu = () =>
      props.navigation.dispatch(DrawerActions.toggleDrawer());

    return (
      <Drawer.Section title="Some title">
        <ActionButton icon="user" label="Profile name" mode="text" />
        <ActionButton label="+ Add chore" mode="contained" />
        <Drawer.Item
          label="Second Item"
          active={active === 'second'}
          onPress={() => {
            this.setState({active: 'second'});
          }}
        />
      </Drawer.Section>
    );
  }
}
