import React from 'react';
import PropTypes from 'prop-types';

// styles
import './content_container.scss';

const ContentContainer = ({ children }) => (
  <div id="content_container">
    <div className="container">
      {children}
    </div>
  </div>
);

// props
ContentContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContentContainer;
