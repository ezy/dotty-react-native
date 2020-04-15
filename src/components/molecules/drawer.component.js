import * as React from 'react';
import {View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import Animated from 'react-native-reanimated';

// import {ActionButton} from '../atoms/button.atom';

export const NavDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Animated.View>
        <View>
          <Drawer.Section>
            <DrawerItem
              label="All chores"
              onPress={() => {
                props.navigation.navigate('ChoresList');
              }}
            />
            <DrawerItem
              label="Funds manager"
              onPress={() => {
                props.navigation.navigate('FundsManager');
              }}
            />
          </Drawer.Section>
        </View>
      </Animated.View>
    </DrawerContentScrollView>
  );
};
