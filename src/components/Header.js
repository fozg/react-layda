import React from 'react';

import styles from './header.css';
import ToggleIcon from '../toggleMenu.png'
export default class Header extends React.Component {
  render () {
    const {
      headerLeft,
      headerCenter,
      headerRight,
      styleHeader,
      onToggle
    } = this.props

    return (
      <div className={'Layda-Header '+styles.Header} style={styleHeader}>
        <div className={styles.HeaderLeft}>
          <div className={styles.HeaderLeft__sidebarToggle} onClick={onToggle}>
            <img src={ToggleIcon} width="18" className="HeaderLeft__sidebarToggle__icon" />
          </div>
          {headerLeft}
        </div>
        {headerCenter}
        {headerRight}
      </div>
    )
  }
}