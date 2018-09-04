import React, { Component } from 'react'

//components
import ContentContainer from 'COMPONENTS/ContentContainer'
import Sidebar from 'COMPONENTS/Sidebar'
import Headline from 'COMPONENTS/Headline'

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
            <div id="design_system">
                <Sidebar title='Design System' pages={navItems} />
                <ContentContainer>
                    <Headline>Headline Component</Headline>
                </ContentContainer>
            </div>
        )
    }

}
