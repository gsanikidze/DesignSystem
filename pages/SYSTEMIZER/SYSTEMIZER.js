import React, { Component } from 'react';

// components
import ContentContainer from 'COMPONENTS/ContentContainer';
import Sidebar from 'COMPONENTS/Sidebar';
import navItems from 'DB/navItems';
import PageSwitcher from './PageSwitcher';

// other

// styles
import './systemizer.scss';
import 'STYLES/code_highlight.scss';

export default class SYSTEMIZER extends Component {
  static async getInitialProps({ query }) {
    return {
      query,
    };
  }

  render() {
    return (
      <div id="systemizer">
        <Sidebar title="Systemizer" navigationItems={navItems} />
        <ContentContainer>
          <PageSwitcher component={
            // eslint-disable-next-line
            this.props.query.component}
          />
        </ContentContainer>
      </div>
    );
  }
}
