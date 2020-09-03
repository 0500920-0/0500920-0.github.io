import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

interface DrawerItemProps extends ListItemProps {
  path: string;
  title: string;
  startIcon: React.ReactNode;
  external?: boolean;
}
export default function DrawerItem ({ path, title, startIcon, external = false }: DrawerItemProps) {
  const isRouteMatched = useRouteMatch({ path, exact: true });
  if (external) return (
    <ListItem
      button
      component="a"
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      selected={!!isRouteMatched} // location.pathname === to
    >
      {' '}
      {/* key={text} */}
      <ListItemIcon>{startIcon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
  return (
    <ListItem
      button
      component={Link}
      to={(location: Object) => ({ ...location, pathname: path })}
      selected={!!isRouteMatched} // location.pathname === to
    >
      {' '}
      {/* key={text} */}
      <ListItemIcon>{startIcon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
}