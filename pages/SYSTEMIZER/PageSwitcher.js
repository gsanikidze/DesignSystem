import React from 'react';

// pages
import {
  MainStyles,
  Typography,
  Buttons,
  Samples,
} from './pages';

export default ({ component }) => {
  switch (component) {
    case 'typography':
      return <Typography />;
    case 'buttons':
      return <Buttons />;
    case 'samples':
      return <Samples />;
    default:
      return <MainStyles />;
  }
};
