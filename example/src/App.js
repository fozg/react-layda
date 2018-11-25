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
                exact: true,
                title: "Hone",
                component: () => (<div>Home page</div>)
              },
              {
                path: "/page1",
                title: "Page 2",
                component: () => (<div>Page 2</div>),
                sidebar: () => (<div>Side bar Testing</div>),
                sidebarParam: 'task'
              }
            ]
          }
        />
      </div>
    )
  }
}
