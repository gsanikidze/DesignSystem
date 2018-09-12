import React from 'react';

// components
import Header from 'COMPONENTS/Header';
import { HorizontalNav } from 'COMPONENTS/Navigation';
import Button from 'COMPONENTS/Button';

// styles
import './beTheme.scss';

// some data
import navItems from './navItems';

export default () => (
  <div id="beTheme">
    <Header brand={<h3 className="brand">BeTheme</h3>} isFixed isDark hasShadow>
      <HorizontalNav navItems={navItems} />
      <Button shape="sharp">Buy Now</Button>
    </Header>
  </div>
);
