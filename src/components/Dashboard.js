import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import MainBoard from'./MainBoard'
import SideBar from './SideBar'

import styles from './dashboard.css'

// This is hard code for now
const WINDOW_MOBILE_WIDTH = 600;
class Dashboard extends React.Component {
  // TODO: this is prototype, need add more works here
  state = {
    visibleNav: window.innerWidth > WINDOW_MOBILE_WIDTH
  }

  _onToggle = () => {
    this.setState(state =>({visibleNav: !state.visibleNav}));
  }

  _onNavChanged = () => {
    this.setState({visibleNav: window.innerWidth > WINDOW_MOBILE_WIDTH})
  }
  render() {
    const {
      boards = [],
      header,
      basename,
      styleHeader, 
      styleNavigation,
      styleContainer,
      defaultBoard
    } = this.props
    const {
      visibleNav
    } = this.state;

    return (
      <Router basename={basename}>
        <div className={styles.DashboardLayout} style={styleContainer}>
          {defaultBoard && <Redirect to={defaultBoard}/>}
          
          {header && <Header {...header} styleHeader={styleHeader} onToggle={this._onToggle} />}
          <div className={styles.Dashboard__wrap}>
            <Navigation
              boards={boards}
              styleNavigation={styleNavigation}
              visibleNav={visibleNav}
              onNavChanged={this._onNavChanged}
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
