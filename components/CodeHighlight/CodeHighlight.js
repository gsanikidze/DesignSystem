import React from 'react';
import Highlight from 'react-highlight';
import PropTypes from 'prop-types';

// components
import { Title } from 'COMPONENTS/Typography';

// styles
import './codeHighlight.scss';

const CodeHighlight = ({ title, children }) => (
  <div className="code_highlight">
    {
                title ? (
                  <header>
                    <Title size="tiny">{title}</Title>
                  </header>
                ) : null
            }
    <section className={title ? '' : 'full_rounded'}>
      <Highlight>{children}</Highlight>
    </section>
  </div>
);

// props
CodeHighlight.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired,
};

CodeHighlight.defaultProps = {
  title: null,
};


export default CodeHighlight;
