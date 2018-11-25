import React from 'react';

import styles from './header.css';

export default class Header extends React.Component {
  render () {
    const {
      headerLeft,
      headerCenter,
      headerRight
    } = this.props

    return (
      <div className={styles.Header}>
        {headerLeft}
      </div>
    )
  }
}