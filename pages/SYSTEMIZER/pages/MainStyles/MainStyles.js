import React from 'react'

// components
import { Title, Paragraph } from 'COMPONENTS/Typography'
import SectionTitle from 'COMPONENTS/SectionTitle'
import Line from 'COMPONENTS/Line'
import CodeHighlight from 'COMPONENTS/CodeHighlight'
import NoteTableGenerator from '../../NoteTableGenerator'

// notes
import { titleNote, paragraphNote } from 'COMPONENTS/Typography'

// styles
import './mainStyles.scss'

// db
import colorsArray from 'DB/colorsArray'

export default () => {
  return (
    <div id="main_styles" className="content_layout">

      <section className="one_component">
        <SectionTitle>Colors</SectionTitle>
        <div className="content">

          <div className="samples">
            {
              colorsArray.map((colorName, index) => (
                <div key={colorName + index} className={`color ${colorName}`}>
                  <Paragraph size="tiny" className="label">{colorName.includes('_') ? `$color${colorName}` : `$color_${colorName}`}</Paragraph>
                </div>
              ))
            }
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

    </div>
  )
}
