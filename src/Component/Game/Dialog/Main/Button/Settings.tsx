import React from 'react';
import { Button } from '@material-ui/core';
import { Settings as SettingsIcon } from '@material-ui/icons';

export type Props = {
  onClick: () => void;
};

const Settings: React.FC<Props> = ({ onClick }) => (
  <Button
    onClick={onClick}
    variant='contained'
    startIcon={<SettingsIcon/>}
    style={{ width: 192, display: 'flex', justifyContent: 'flex-start' }}>
    Settings
  </Button>
);

export default Settings;