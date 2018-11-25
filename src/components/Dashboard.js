import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 

class Dashboard extends React.Component {

  render () {
    const {
      boards = []
    } = this.props;

    return (
      <Router>
        <div>
          <div>
            Navigation
          </div>
          {
            boards.map((board, idx) => (
              <div>
                <Route
                  exact={board.exact}
                  path={board.path}
                  component={board.component}
                />
              </div>
            ))
          }
        </div>
      </Router>
    )
  }
}

export default Dashboard;
