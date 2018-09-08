import React, { Component } from 'react'

//components
import ContentContainer from 'COMPONENTS/ContentContainer'
import Sidebar from 'COMPONENTS/Sidebar'
import PageSwitcher from './PageSwitcher'

// other
import navItems from 'DB/navItems'

// styles
import './systemizer.scss'

export default class DefaultLayout extends Component {
    static async getInitialProps({ query }) {
        return {
            query
        }
    }
    render() {
        return (
            <div id="systemizer">
                <Sidebar title='Systemizer' navigationItems={navItems} />
                <ContentContainer>
                    {
                        this.props.query.component ?
                            <PageSwitcher component={this.props.query.component} /> :
                            <div>There Is No Component</div>
                    }

                </ContentContainer>
            </div>
        )
    }

}
