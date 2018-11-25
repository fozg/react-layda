import React from 'react';

export default class SideBar extends React.Component {

  render () {
    const {
      match,
      children
    } = this.props;

    return (
      <div>
        SideBar {match.params.username}
        {JSON.stringify(match)}
        {children()}
      </div>
    )
  }
}