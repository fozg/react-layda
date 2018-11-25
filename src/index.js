import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dashboard from './components/Dashboard'
import LinkToSidebar from './components/LinkToSidebar'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    return (<Dashboard {...this.props} />)
  }
}

export {LinkToSidebar}
