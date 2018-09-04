import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from 'HOCS/with-redux-store'
import { Provider } from 'react-redux'

// styles
import 'STYLES/main.scss'
import 'STYLES/reset.scss'

class MyApp extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Container>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(MyApp)
