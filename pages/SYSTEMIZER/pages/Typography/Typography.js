import React from 'react'

// components
import { Title, Paragraph } from 'COMPONENTS/Typography'
import SectionTitle from 'COMPONENTS/SectionTitle'

// notes
import { titleNote } from 'COMPONENTS/Typography'

export default () => {
  return (
    <div>
      <SectionTitle><code>{'<Title />'}</code> Component</SectionTitle>
      <Paragraph>
        {titleNote.note}
      </Paragraph>
    </div>
  )
}
