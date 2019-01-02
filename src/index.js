import React, { Component } from 'react'
import Dashboard from './components/Dashboard'
import LinkToSidebar from './components/LinkToSidebar'

export default class ExampleComponent extends Component {

  render() {
    return (<Dashboard {...this.props} />)
  }
}

export {LinkToSidebar}
