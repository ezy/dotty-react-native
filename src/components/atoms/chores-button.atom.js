import * as React from 'react';
import {IconButton} from 'react-native-paper';

/**
 *
 * @param {*} props
 */
export const ChoresButton = (props) => {
  const {icon, color} = props;
  return (
    <IconButton
      icon={icon}
      color={color}
      size={32}
      onPress={() => console.log('Chore Pressed')}
    />
  );
};
