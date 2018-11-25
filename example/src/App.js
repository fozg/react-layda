import React, { Component } from 'react'

import Dashboard, {LinkToSidebar} from 'react-dashboard-layout'

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
                component: () => (
                  <div>
                    Page 2
                    <LinkToSidebar
                      sidebarLink="idoftask1"
                      boardPath="/page1"
                    >Open task 1</LinkToSidebar>
                    <LinkToSidebar
                      sidebarLink="idoftask2"
                      boardPath="/page1"
                    >Open task 2</LinkToSidebar>
                    <LinkToSidebar
                      sidebarLink="idoftask3"
                      boardPath="/page1"
                    >Open task 3</LinkToSidebar>
                  </div>
                ),
                sidebar: {
                  component: ({taskid}) => (<div>Side bar Testing. <br/> Task id: {taskid} </div>),
                  sidebarParam: 'taskid',
                  width: 400
                }
              }
            ]
          }
        />
      </div>
    )
  }
}
