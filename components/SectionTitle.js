import React from 'react';
import PropTypes from 'prop-types';

// components
import Line from 'COMPONENTS/Line';
import { Paragraph } from 'COMPONENTS/Typography';

// component
const SectionTitle = ({ children }) => (
  <div>
    <Paragraph bold size="small">{children}</Paragraph>
    <Line style={{ height: '8px' }} />
  </div>
);

// props
SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionTitle;
