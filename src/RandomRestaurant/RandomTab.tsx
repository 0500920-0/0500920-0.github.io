import React from 'react';

import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import SwipeableViews from 'react-swipeable-views';

import { Condition } from './useRandomizer'; // type only
interface TabListItem {
  id: Condition;
  name: string;
  disabled?: boolean;
}
interface RandomTabProps extends AppBarProps {
  index: number;
  onChangeIndex?: ((event: React.ChangeEvent<{}>, value: number) => void) | undefined;
  list: TabListItem[];
}

export default function RandomTab({ index: tabIndex, onChangeIndex, list, ...props }: RandomTabProps) {
  return (
    <AppBar position="static" color="default" {...props}>
      <Tabs
        value={tabIndex}
        onChange={onChangeIndex}
        indicatorColor="primary"
        textColor="primary"
        centered
        aria-label="full width tabs"
      >
        {' '}
        {/* centered variant="scrollable|fullWidth" scrollButtons="auto|on|off" */}
        {list.map((item, idx) => <Tab key={item.id} label={item.name} id={`tab-${idx}`} aria-controls={`tabpanel-${idx}`} disabled={item.disabled} />)}
      </Tabs>
    </AppBar>
  );
}
