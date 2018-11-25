import React, { Component } from 'react'

import Dashboard from 'react-dashboard-layout'

export default class App extends Component {
  render () {
    return (
      <div>
        <Dashboard 
          boards={
            [
              {
                path: "/",
                component: () => (<div>Home page</div>)
              },
              {
                path: "/page1",
                component: () => (<div>Page 1</div>)
              }
            ]
          }
        />
      </div>
    )
  }
}
