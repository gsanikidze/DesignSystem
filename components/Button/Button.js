/**
 * Button Component
 * color: primary(default), secondary, danger and warning
 * shape: full rounded(default), sharp and rounded
 */
import React from 'react';
import PropTypes from 'prop-types';

// styles
import buttonCss from './button.css';

// component
const Button = ({
  children,
  className,
  id,
  onClick,
  name,
  type,
  style,
}) => (
  <button
    className={className}
    id={id}
    onClick={onClick}
    name={name}
    type={type}
    style={buttonCss(style)}
  >
    {children}
  </button>
);

// props
Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  id: '',
  name: '',
  type: '',
  style: {},
  onClick: () => console.log('Button Clicked!'),
};

export default Button;
