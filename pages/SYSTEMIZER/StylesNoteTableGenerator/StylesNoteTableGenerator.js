import React from 'react'

// components
import { Title, Paragraph } from 'COMPONENTS/Typography'
import Line from 'COMPONENTS/Line'

// styles
import './stylesNoteTableGenerator.scss'

export default ({ noteObj }) => {
    return (
        <div className="component_note">
            <header>
                <Title size='tiny'>{noteObj.title}</Title>
                {noteObj.description ? <Paragraph><Line />{noteObj.description}</Paragraph> : null}
            </header>
            <section>
                <Paragraph bold uppercase>File Sections</Paragraph>
                {
                    noteObj.sections.length <= 0 ? null : noteObj.sections.map((item, index) => {
                        let prop = Object.keys(item)[0]
                        let desk = item[prop]
                        return (
                            <div key={prop + index} className="row">
                                <code>{prop}</code>
                                <Paragraph>{desk}</Paragraph>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}
