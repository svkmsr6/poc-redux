import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={this.props.logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    )
  }
}
