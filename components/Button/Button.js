import React from 'react';
import PropTypes from 'prop-types';

// styles
import './button.scss';

// component
const Button = ({
  children,
  className,
  id,
  onClick,
}) => (
  <button className={`button ${className}`} id={id} onClick={onClick}>
    {children}
  </button>
);

// props
Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  id: '',
  onClick: () => console.log('Button Clicked!'),
};

export default Button;
