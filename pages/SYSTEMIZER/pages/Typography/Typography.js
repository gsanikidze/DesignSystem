import React from 'react'
import Highlight from 'react-highlight'

// components
import { Title, Paragraph } from 'COMPONENTS/Typography'
import SectionTitle from 'COMPONENTS/SectionTitle'
import Line from 'COMPONENTS/Line'
import CodeHighlight from 'COMPONENTS/CodeHighlight'
import NoteTableGenerator from '../../NoteTableGenerator'

// notes
import { titleNote } from 'COMPONENTS/Typography'

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
            <Title style={{ color: '#ff0088' }}>Base Title With Style Object</Title>
            <Line />
            <Title size="large">Large Title</Title>
            <Line />
            <Title size="large" uppercase>Large Title</Title>
            <Line />
          </div>
          <div className="description">
            <CodeHighlight title="Code Sample">
              {'import { Title } from "COMPONENTS/Typography"'}
              <br /><br />
              {'<Title size="tiny">Tiny Title</Title>'}
              <br />
              {'<Title uppercase size="tiny">Uppercase Tiny Title</Title>'}
              <br />
              {'<Title>Base Title</Title>'}
              <br />
              {'<Title style={{ color: "#ff0088" }}>Base Title With Style Object</Title>'}
              <br />
              {'<Title size="large">Large Title</Title>'}
            </CodeHighlight>
            <NoteTableGenerator noteObj={titleNote} />
          </div>
        </div>
      </section>

    </div>
  )
}
