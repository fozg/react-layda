/**
 * LOL this name
 */
import React from 'react';

import styles from './dashboard.css'

export default class MainBoard extends React.Component {

  render () {
    const {
      component,
      // sidebarParam = 'id',
      children,
      ...rest
    } = this.props;

    return (
      <div className={styles.DashboardMain__inner}>
        <div className={styles.DashboardMain__inner__left}>
          {component({
            ...rest
          })}
        </div>
        {children}
      </div>
    )
  }
}