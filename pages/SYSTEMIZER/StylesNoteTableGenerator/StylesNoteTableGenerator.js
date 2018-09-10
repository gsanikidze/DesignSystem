import React from 'react';
import PropTypes from 'prop-types';

// components
import { Title, Paragraph } from 'COMPONENTS/Typography';
import Line from 'COMPONENTS/Line';

// styles
import './stylesNoteTableGenerator.scss';

// component
const StylesNoteTableGenerator = ({ noteObj }) => (
  <div className="component_note">
    <header>
      <Title size="tiny">{noteObj.title}</Title>
      {noteObj.description ? (
        <Paragraph>
          <Line />
          {noteObj.description}
        </Paragraph>
      ) : null}
    </header>
    <section>
      <Paragraph bold uppercase>File Sections</Paragraph>
      {
                    noteObj.sections.length <= 0 ? null : noteObj.sections.map((item, index) => {
                      const prop = Object.keys(item)[0];
                      const desk = item[prop];
                      return (
                        <div key={prop + index} className="row">
                          <code>{prop}</code>
                          <Paragraph>{desk}</Paragraph>
                        </div>
                      );
                    })
                }
    </section>
  </div>
);

// props
StylesNoteTableGenerator.propTypes = {
  noteObj: PropTypes.object.isRequired,
};

export default StylesNoteTableGenerator;
