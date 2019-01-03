import React from 'react';

import styles from './header.css';

export default class Header extends React.Component {
  render () {
    const {
      headerLeft,
      headerCenter,
      headerRight,
      styleHeader
    } = this.props

    return (
      <div className={'Layda-Header '+styles.Header} style={styleHeader}>
        {headerLeft}
      </div>
    )
  }
}