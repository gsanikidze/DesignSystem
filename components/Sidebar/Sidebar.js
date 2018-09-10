import React from 'react';
import PropTypes from 'prop-types';

// components
import SidebarNavigation from './SidebarNavigation';

// styles
import './sidebar.scss';

// component
const Sidebar = ({ title, navigationItems }) => (
  <section id="sidebar">
    <header><a href="/">{title}</a></header>
    <SidebarNavigation navigationItems={navigationItems} />
  </section>
);

// props
Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  navigationItems: PropTypes.array.isRequired,
};


export default Sidebar;
