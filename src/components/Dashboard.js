import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import SideBar from './SideBar'

import styles from './dashboard.css'

class Dashboard extends React.Component {
  render() {
    const {
      boards = []
    } = this.props

    return (
      <Router>
        <div className={styles.DashboardLayout}>
          <Header />
          <div className={styles.Dashboard__wrap}>
            <Navigation
              boards={boards}
            />
            <div
              className={styles.DashboardMain}
            >
              {
                boards.map((board, idx) => (
                  <Route
                    key={idx}
                    exact={board.exact}
                    path={board.path}
                    component={
                      () => <div className={styles.DashboardMain__inner}>
                        <div className={styles.DashboardMain__inner__left}>
                          {board.component()}
                        </div>
                        {board.sidebar &&
                          <Route
                            path={`${board.path}/:${board.sidebar.sidebarParam || 'id'}`}
                            render={({ match }) => (
                              <SideBar
                                {...board.sidebar}
                                match={match}
                              />
                            )}
                          />
                        }
                      </div>
                    }
                  />
                ))
              }
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default Dashboard
