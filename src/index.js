import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dashboard from './components/Dashboard';


export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    return ( <Dashboard {...this.props} />  )
  }
}
