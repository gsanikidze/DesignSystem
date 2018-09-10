import React from 'react';
import PropTypes from 'prop-types';

// styles
import './line.scss';

// component
const Line = ({
  className,
  id,
  style,
}) => <div className={`line ${className}`} id={id} style={style} />;

// props
Line.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
};

Line.defaultProps = {
  className: '',
  id: '',
  style: {},
};

export default Line;
