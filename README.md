<p align="center">
<img src="https://fozg.github.io/react-layda/dashboard.png" width="150">
</p>
<p align="center">
  <strong>react-layda</strong> • A Common dashboard layout wrapper of react-router-dom
</p>
<p align="center">
  <a href="#usage">Usage</a> •
  <a href="#install">Install</a> •
  <a href="https://fozg.github.io/react-layda/" target="_blank">Examples</a> 
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/fozg/react-layda/master/example/public/react-layda.png" style="margin: 20px auto;display: inline-block">
</p>


[![NPM](https://img.shields.io/npm/v/react-layda.svg)](https://www.npmjs.com/package/react-layda) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


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
          basename={process.env.DEV ? '/' : '/react-layda'}
          header={{
            headerLeft: <h3 style={{padding: '0 10px'}}>Dashboard Layout</h3>
          }}
          styleContainer={...} // object styles
          styleNavigation={...} // style for navigation
          styleHeader={...} // style header
          boards={
            [
              {
                path: "/todo",
                // exact: true,
                title: "Hone",
                component: (props) =>  <TodoList {...props} />,
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
                  width: 400,
                  style: //object styles
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
