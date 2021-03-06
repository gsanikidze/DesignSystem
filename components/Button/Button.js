/**
 * Button Component
 * color: primary(default), secondary, danger and warning
 * shape: full rounded(default), sharp and rounded
 */
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
  color,
  outlined,
  flat,
  name,
  type,
  shape,
}) => (
  <button className={`button ${className} ${color} ${outlined ? 'outlined' : ''} ${flat ? 'flat outlined' : ''} ${shape}`} id={id} onClick={onClick} name={name} type={type}>
    {children}
  </button>
);

// props
Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  shape: PropTypes.string,
  outlined: PropTypes.bool,
  flat: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  id: '',
  color: '',
  name: '',
  type: '',
  shape: '',
  outlined: false,
  flat: false,
  onClick: () => console.log('Button Clicked!'),
};

export default Button;
