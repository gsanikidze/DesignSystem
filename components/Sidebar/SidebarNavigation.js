import React from 'react';
import { Link } from 'ROUTES';
import PropTypes from 'prop-types';

// component
const SidebarNavigation = ({ navigationItems, className = '' }) => (
  <nav id="sidebar_navigation" className={className}>
    <ul>
      {
        navigationItems.map(({ title, href }, index) => (
          <li key={index + title}>
            <Link href={href}>
              <a href={href}>{title}</a>
            </Link>
          </li>
        ))
     }
    </ul>
  </nav>
);

// props
SidebarNavigation.propTypes = {
  navigationItems: PropTypes.array.isRequired,
  className: PropTypes.string,
};

SidebarNavigation.defaultProps = {
  className: '',
};


export default SidebarNavigation;
