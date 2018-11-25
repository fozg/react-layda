<p align="center">
<img src="https://fozg.github.io/react-layout-dashboard/dashboard.png" width="150">
</p>
<p align="center">
<strong>react-layda</strong>
 Common dashboard layout wrapper of react-router-dom
</p>
<img src="https://fozg.github.io/react-layout-dashboard/react-layda.png" style="margin: 20px auto;display: inline-block">

[![NPM](https://img.shields.io/npm/v/react-layda.svg)](https://www.npmjs.com/package/react-layda) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## [Demo](https://fozg.github.io/react-layout-dashboard/)
## Install

```bash
npm install --save react-layda
```

## Usage

```jsx
import React, { Component } from 'react'

import Dashboard, {LinkToSidebar} from 'react-layda'

class Example extends Component {
  render () {
    return (
      <Dashboard
          basename={process.env.DEV ? '/' : '/react-layout-dashboard'}
          header={{
            headerLeft: <h3 style={{padding: '0 10px'}}>Dashboard Layout</h3>
          }}
          boards={
            [
              {
                path: "/todo",
                // exact: true,
                title: "Hone",
                component: TodoList,
                sidebar: {
                  component: ({todoId}) => (
                    <SidebarWrap>
                      <div>Side bar Testing. <br/> Task id: {todoId} </div>
                    </SidebarWrap>
                  ),
                  sidebarParam: 'todoId',
                },

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
              }
            ]
          }
        />
    )
  }
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

```

## License

MIT © [fozg](https://github.com/fozg)
