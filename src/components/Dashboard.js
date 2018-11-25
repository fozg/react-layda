import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navigation from './Navigation';
import SideBar from './SideBar';
import styles from './dashboard.css'

class Dashboard extends React.Component {

  render () {
    const {
      boards = []
    } = this.props;

    return (
      <Router>
        <div className={styles.DashboardLayout}>
          
          <Navigation
            boards={boards}
          />
          
          <div>
            {
              boards.map((board, idx) => (
                <div>
                  <Route
                    exact={board.exact}
                    path={board.path}
                    component={board.component}
                  />
                  <Route
                    path={`${board.path}/:${board.sidebarParam || 'id'}`}
                    render={({match}) => (
                      <SideBar match={match} sidebarParam={board.sidebarParam}
                        component={board.sidebar}
                      />                          
                    )}
                  />
                </div>
              ))
            }
          </div>

        </div>
      </Router>
    )
  }
}

export default Dashboard;
