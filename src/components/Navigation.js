import React from 'react';
import { NavLink } from "react-router-dom";

import styles from './navigation.css';
export default class Navigation extends React.Component {

  render () {
    const {
      boards
    } = this.props;

    return (
      <div className={'Layda-Navigation '+styles.Navigation}>
        <ul className={styles.Navigation__Links}>
          {boards.map((board, idx) => (
            <li className={styles.Navigation__Links__li} >
              <NavLink 
                exact={board.exact}
                to={board.path}
                activeClassName={styles.active}
              >
                {board.title}
              </NavLink>
            </li>
          ))}    
        </ul>
      </div>
    )
  }
}
