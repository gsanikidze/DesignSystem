import React from 'react';
import PropTypes from 'prop-types';

// styles
import './heroSection.scss';

// component
const HeroSection = ({
  children,
  imageUrl,
  includeGradient,
  id,
  className,
  style,
}) => (
  <div
    id={id}
    className={`hero_section ${className}`}
    style={{ ...style, backgroundImage: `url(${imageUrl})` }}
  >
    <div className={`container ${includeGradient ? 'gradient' : ''}`}>{children}</div>
  </div>
);

// props
HeroSection.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  includeGradient: PropTypes.bool,
};

HeroSection.defaultProps = {
  id: '',
  className: '',
  style: {},
  includeGradient: false,
};

export default HeroSection;
