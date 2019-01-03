import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import MainBoard from'./MainBoard'
import SideBar from './SideBar'

import styles from './dashboard.css'

class Dashboard extends React.Component {
  render() {
    const {
      boards = [],
      header,
      basename,
      styleHeader, 
      styleNavigation,
      styleContainer
    } = this.props

    return (
      <Router basename={basename}>
        <div className={styles.DashboardLayout} style={styleContainer}>
          {header && <Header {...header} styleHeader={styleHeader} />}
          <div className={styles.Dashboard__wrap}>
            <Navigation
              boards={boards}
              styleNavigation={styleNavigation}
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
                    render={props =>
                      <MainBoard {...board} {...props}>
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
                      </MainBoard>
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
