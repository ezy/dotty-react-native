import * as React from 'react';
import {Button} from 'react-native-paper';

/**
 *
 * @param {*} props
 * @param {string} icon take selector for icon-font
 * @param {string} takes one of text | outline | contained
 */
const ActionButton = (props) => {
  const {icon, mode, label} = props;
  return (
    <Button icon={icon} mode={mode} onPress={() => console.log('Pressed')}>
      {label}
    </Button>
  );
};

export default ActionButton;
