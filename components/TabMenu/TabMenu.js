import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'ROUTES';

// styles
import './tabMenu.scss';

// component
const TabMenu = ({
  navItems,
  id,
  className,
  style,
}) => (
  <nav id={id} className={`tab_menu ${className}`} style={style}>
    {
        navItems.map((item, index) => (
          <Link href={item.href} key={item.name + index}>
            <a>{item.name}</a>
          </Link>
        ))
    }
  </nav>
);

// props
TabMenu.propTypes = {
  navItems: PropTypes.array.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

TabMenu.defaultProps = {
  id: '',
  className: '',
  style: {},
};

export default TabMenu;
