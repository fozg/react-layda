import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dashboard from './components/Dashboard';

import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    return (
      <div className={styles.DashboardLayout}>
        <Dashboard {...this.props} />
      </div>
    )
  }
}
