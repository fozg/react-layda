import React from 'react';

import styles from './sidebar.css';
export default class SideBar extends React.Component {

  render () {
    const {
      match,
      component,
      // sidebarParam = 'id',
      width = 200
    } = this.props;

    return (
      <div className={styles.sidebar} style={{width}}>
        {component({
          ...match.params
        })}
      </div>
    )
  }
}