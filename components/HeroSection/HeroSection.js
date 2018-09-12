import React from 'react';
import PropTypes from 'prop-types';

const HeroSection = ({
  imageUrl,
  id,
  className,
  style,
}) => (
  <div id={id} className={`hero_sectopm ${className}`} style={{ ...style, backgroundImage: `url(${imageUrl})` }}>
      Hero
  </div>
);

// props
HeroSection.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

HeroSection.defaultProps = {
  id: '',
  className: '',
  style: {},
};

export default HeroSection;
