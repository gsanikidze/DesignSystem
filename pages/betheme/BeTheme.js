import React from 'react';

// components
import Header from 'COMPONENTS/Header';
import { HorizontalNav } from 'COMPONENTS/Navigation';
import Button from 'COMPONENTS/Button';
import HeroSection from 'COMPONENTS/HeroSection';
import TabMenu from 'COMPONENTS/TabMenu';

// styles
import './beTheme.scss';

// some data
import navItems from './navItems';

export default () => (
  <div id="beTheme">
    <Header brand={<h3 className="brand">BeTheme</h3>} isFixed isDark hasShadow>
      <div className="header_right_container">
        <HorizontalNav navItems={navItems} />
        <Button shape="sharp">Buy Now</Button>
      </div>
    </Header>
    <HeroSection includeGradient imageUrl="https://images.pexels.com/photos/176851/pexels-photo-176851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
      <h1>Now 330+ PreBuilt Websites</h1>
    </HeroSection>
    <TabMenu navItems={navItems} />
  </div>
);
