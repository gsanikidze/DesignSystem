import React from 'react';
import PropTypes from 'prop-types';

// style
import './title.scss';

const Title = ({
  children,
  id,
  className,
  size,
  onDarkBackground,
  uppercase,
  style,
}) => (
  <div
    className={`title ${className} ${size} ${onDarkBackground ? 'white' : ''} ${uppercase ? 'uppercase' : ''}`}
    id={id}
    style={style}
  >
    {children}
  </div>
);

// props
Title.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  onDarkBackground: PropTypes.bool,
  uppercase: PropTypes.bool,
  style: PropTypes.object,
};

Title.defaultProps = {
  id: '',
  className: '',
  size: '',
  onDarkBackground: false,
  uppercase: false,
  style: {},
};

export default Title;
