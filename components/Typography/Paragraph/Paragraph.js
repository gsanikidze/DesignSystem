import React from 'react';
import PropTypes from 'prop-types';

// style
import './paragraph.scss';

const Paragraph = ({
  children,
  id = '',
  className = '',
  size = '',
  onDarkBackground = false,
  uppercase = false,
  bold = false,
  style = {},
}) => (
  <div
    className={`paragraph ${className} ${size} ${onDarkBackground ? 'white' : ''}${uppercase ? 'uppercase' : ''} ${bold ? 'bold' : ''}`}
    id={id}
    style={style}
  >
    {children}
  </div>
);

// props
Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  id: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  onDarkBackground: PropTypes.bool,
  uppercase: PropTypes.bool,
  bold: PropTypes.bool,
  style: PropTypes.object,
};

Paragraph.defaultProps = {
  children: '',
  id: '',
  className: '',
  size: '',
  onDarkBackground: false,
  uppercase: false,
  bold: false,
  style: {},
};


export default Paragraph;
