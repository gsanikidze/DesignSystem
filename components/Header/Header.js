import React from 'react';
import PropTypes from 'prop-types';

// styles
import './header.scss';

const Header = ({
  children,
  className,
  id,
  style,
  isFixed,
  brand,
  isContentContainer,
  isDark,
  hasShadow,
}) => (
  <div
    id={id}
    className={`
    main_header ${className} ${isFixed ? 'fixed' : ''} ${isDark ? 'dark' : ''} ${hasShadow ? 'shadow' : ''}
    `}
    style={style}
  >
    <div className={isContentContainer ? 'container' : 'container_fluid'}>
      <div className="brand">{brand}</div>
      <div className="content">{children}</div>
    </div>
  </div>
);

// props
Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  brand: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  style: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  isDark: PropTypes.bool,
  isFixed: PropTypes.bool,
  hasShadow: PropTypes.bool,
  isContentContainer: PropTypes.bool,
};

Header.defaultProps = {
  style: {},
  className: '',
  id: '',
  isDark: false,
  isFixed: false,
  hasShadow: false,
  isContentContainer: false,
};


export default Header;
