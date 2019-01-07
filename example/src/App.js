import React, { Component } from 'react'

import Dashboard, {LinkToSidebar} from 'react-layda'

export default class App extends Component {
  render () {
    return (
      <div>
        <Dashboard
          basename={process.env.DEV ? '/' : '/react-layda'}
          // defaultBoard="todo"
          header={{
            headerLeft: <h3 style={{padding: '0 10px'}}>Dashboard Layout</h3>,
            headerCenter: <h3 style={{padding: '0 10px'}}>Example</h3>,
            headerRight: <h3 style={{padding: '0 10px'}}>Account</h3>
          }}
          boards={
            [
              {
                path: "/todo",
                // exact: true,
                title: "Todo",
                component: TodoList ,
                sidebar: {
                  component: ({todoId}) => (
                    <SidebarWrap>
                      <div>Side bar Testing. <br/> Task id: {todoId} </div>
                    </SidebarWrap>
                  ),
                  sidebarParam: 'todoId',
                },
                // isVisibledNavigation: true
              },
              {
                path: "/tasks",
                title: "Tasks List",
                component: TaskList,

                sidebar: {
                  component: ({taskid}) => (
                    <SidebarWrap>
                      <div>Side bar Testing. <br/> Task id: {taskid} </div>
                    </SidebarWrap>
                  ),
                  sidebarParam: 'taskid',
                  width: 400
                }
              },
              {
                path: "/test",
                title: "Test List",
                component: TaskList,
              }
            ]
          }
        />
      </div>
    )
  }
}

const SidebarWrap = ({children}) => (
  <div style={{
    padding: 10
  }}>
    {children}
  </div>
)

const TodoList = (props) => {
  // console.log(props)
  return (
    <div className="BoardContentDemo">
      Todo:
      <ul>
        <li><LinkToSidebar sidebarLink="todo1" boardPath="/todo">Open Todo 1</LinkToSidebar></li>
        <li><LinkToSidebar sidebarLink="todo2" boardPath="/todo">Open Todo 2</LinkToSidebar></li>
        <li><LinkToSidebar sidebarLink="todo3" boardPath="/todo">Open Todo 3</LinkToSidebar></li>
      </ul>
    </div>
  )
}

const TaskList = () => (
  <div className="BoardContentDemo">
    Task Lists
    <ul>
      <li><LinkToSidebar sidebarLink="idoftask1" boardPath="/tasks">Open task 1</LinkToSidebar></li>
      <li><LinkToSidebar sidebarLink="idoftask2" boardPath="/tasks">Open task 2</LinkToSidebar></li>
      <li><LinkToSidebar sidebarLink="idoftask3" boardPath="/tasks">Open task 3</LinkToSidebar></li>
    </ul>
  </div>
)

