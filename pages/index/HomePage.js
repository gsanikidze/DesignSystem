import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'ROUTES'

// redux
import { actionCreators } from 'ACTIONS'

// styles
import './home_page.scss'

const HomePage = () => {
    return (
        <div id="home_page">
            Welcome To Design System.
            <br />
            <Link route="DesignSystem"><a>Open System</a></Link>
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
