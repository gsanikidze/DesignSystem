import React from 'react'

// components
import { Title, Paragraph } from 'COMPONENTS/Typography'
import SectionTitle from 'COMPONENTS/SectionTitle'
import Line from 'COMPONENTS/Line'
import CodeHighlight from 'COMPONENTS/CodeHighlight'
import NoteTableGenerator from '../../NoteTableGenerator'

// notes
import { titleNote, paragraphNote } from 'COMPONENTS/Typography'

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
              {'import { Title } from "COMPONENTS/Typography";'}
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

      <section className="one_component">
        <SectionTitle><code>{'<Paragraph />'}</code> Component</SectionTitle>
        <div className="content">
          <div className="samples">
            <Paragraph size="tiny">Tiny Paragraph</Paragraph>
            <Line />
            <Paragraph>Base Paragraph</Paragraph>
            <Line />
            <Paragraph uppercase>Uppercase Base Paragraph</Paragraph>
            <Line />
            <Paragraph bold>Bold Base Paragraph</Paragraph>
            <Line />
            <Paragraph style={{ color: '#ff0088' }}>Base Paragraph With Style Object</Paragraph>
            <Line />
            <Paragraph size="large">Large Paragraph</Paragraph>
            <Line />
            <Paragraph size="large" uppercase>Large Uppercase Paragraph</Paragraph>
            <Line />
          </div>
          <div className="description">
            <CodeHighlight title="Code Sample">
              {'import { Paragraph } from "COMPONENTS/Typography";'}
              <br /><br />
              {'<Paragraph size="tiny">Tiny Paragraph</Paragraph>'}
              <br />
              {'<Paragraph>Base Paragraph</Paragraph>'}
              <br />
              {'<Paragraph uppercase>Uppercase Base Paragraph</Paragraph>'}
              <br />
              {'<Paragraph bold>Bold Base Paragraph</Paragraph>'}
              <br />
              {'<Paragraph style={{ color: "#ff0088" }}>Base Paragraph With Style Object</Paragraph>'}
            </CodeHighlight>
            <NoteTableGenerator noteObj={paragraphNote} />
          </div>
        </div>
      </section>

    </div>
  )
}
