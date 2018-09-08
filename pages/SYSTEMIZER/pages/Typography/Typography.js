import React from 'react'

// components
import { Title, Paragraph } from 'COMPONENTS/Typography'
import SectionTitle from 'COMPONENTS/SectionTitle'
import Line from 'COMPONENTS/Line'

// notes
import { titleNote } from 'COMPONENTS/Typography'
import NoteTableGenerator from '../../NoteTableGenerator';

export default () => {
  return (
    <div id="typography_page" className="content_layout">

      <section className="one_component">
        <SectionTitle><code>{'<Title />'}</code> Component</SectionTitle>
        <div className="content">
          <div className="samples">
            <Title size="tiny">Tiny Title</Title>
            <Line />
            <Title uppercase size="tiny">Uppercase Tiny Title</Title>
            <Line />
            <Title>Base Title</Title>
            <Line />
            <Title size="large">Large Title</Title>
            <Line />
          </div>
          <div className="description">
            <NoteTableGenerator noteObj={titleNote} />
          </div>
        </div>
      </section>

    </div>
  )
}
