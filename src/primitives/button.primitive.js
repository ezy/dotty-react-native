import * as React from 'react';
import {Button} from 'react-native-paper';

const ActionButton = (props) => {
  const {icon, mode, label} = props;
  return (
    <Button icon={icon} mode={mode} onPress={() => console.log('Pressed')}>
      {label}
    </Button>
  );
};

export default ActionButton;
