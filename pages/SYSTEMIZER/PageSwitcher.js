import React from 'react';

// pages
import {
  MainStyles,
  Typography,
  Buttons,
} from './pages';

export default ({ component }) => {
  switch (component) {
    case 'typography':
      return <Typography />;
    case 'buttons':
      return <Buttons />;
    default:
      return <MainStyles />;
  }
};
