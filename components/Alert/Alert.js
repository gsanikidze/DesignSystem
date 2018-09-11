import React from 'react';
import PropTypes from 'prop-types';

// styles
import './alert.scss';

// component
const Alert = ({
  children,
  className,
  id,
  color,
}) => (
  <div className={`alert ${className} ${color}`} id={id}>
    {children}
  </div>
);

// props
Alert.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string,
};

Alert.defaultProps = {
  className: '',
  id: '',
  color: '',
};

export default Alert;
