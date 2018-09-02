import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// redux
import { actionCreators } from 'ACTIONS'

//components
import ContentContainer from 'COMPONENTS/ContentContainer'
import Sidebar from 'COMPONENTS/Sidebar'
import Headline from 'COMPONENTS/Headline'

// styles
import 'STYLES/main.scss'
import 'STYLES/reset.scss'
import './home_page.scss'

// other
import navItems from 'DB/navItems'

const HomePage = () => {
    return (
        <div id="home_page">
            <Sidebar title='Design System' pages={navItems} />
            <ContentContainer>
                <Headline>Headline Component</Headline>
            </ContentContainer>
        </div>
    )
}

// connected component with redux
function mapStateToProps(state) {
    return { toggleHeader: state.headerReducer.toggleHeader }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
