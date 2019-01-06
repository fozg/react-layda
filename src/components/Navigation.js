import React from 'react';
import { NavLink } from "react-router-dom";

import styles from './navigation.css';
export default class Navigation extends React.Component {

  render () {
    const {
      boards,
      styleNavigation
    } = this.props;

    return (
      <div className={'Layda-Navigation '+styles.Navigation} style={styleNavigation}>
        <ul className={styles.Navigation__Links}>
          {boards.map((board, idx) => board.isVisibledNavigation !== false ?
            <li className={styles.Navigation__Links__li} key={board.path}>
              <NavLink 
                exact={board.exact}
                to={board.path}
                activeClassName={'Layda-Nav-active '+styles.active}
              >
                {board.title}
              </NavLink>
            </li> : false
          )}    
        </ul>
      </div>
    )
  }
}
