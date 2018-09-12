import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'ROUTES';

// styles
import './horizontalNav.scss';

const HorizontalNav = ({
  navItems,
  id,
  className,
  style,
}) => (
  <div id={id} style={style} className={`horizontal_nav ${className}`}>
    {
        navItems.map((item, index) => (
          <Link key={item.name + index} href={item.href}><a>{item.name}</a></Link>
        ))
    }
  </div>
);

// props
HorizontalNav.propTypes = {
  navItems: PropTypes.array.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

HorizontalNav.defaultProps = {
  id: '',
  className: '',
  style: {},
};

export default HorizontalNav;
