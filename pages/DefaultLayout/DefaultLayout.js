import React, { Component } from 'react'

export default class DefaultLayout extends Component {
    static async getInitialProps({ query }) {
        return {
            query
        }
    }
    render() {
        return (
            <div>
                Default Layout
                {console.log(this.props)}
            </div>
        )
    }

}
