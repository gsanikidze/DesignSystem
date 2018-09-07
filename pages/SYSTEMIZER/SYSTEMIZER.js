import React, { Component } from 'react'

//components
import ContentContainer from 'COMPONENTS/ContentContainer'
import Sidebar from 'COMPONENTS/Sidebar'
import { Title, Paragraph, titleNote } from 'COMPONENTS/Typography'

// other
import navItems from 'DB/navItems'

export default class DefaultLayout extends Component {
    static async getInitialProps({ query }) {
        return {
            query
        }
    }
    render() {
        return (
            <div id="SYSTEMIZER">
                <Sidebar title='Systemizer' pages={navItems} />
                <ContentContainer>
                    {console.log(titleNote)}
                    <Title>Title Component</Title>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ullam temporibus asperiores doloremque fugiat provident nam labore, repellat libero nisi quo fugit beatae tenetur corporis eveniet, est, nemo quas omnis.</Paragraph>
                </ContentContainer>
            </div>
        )
    }

}
