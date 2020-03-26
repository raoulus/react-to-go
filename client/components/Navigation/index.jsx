import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.less'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className="nav">
        <ul className="nav-left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <ul className="nav-right">
          <li className="user">
            <a href="#">
              <i className="fas fa-user"></i>
            </a>
          </li>
          <li className="user">
            <a href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
          <li className="user">
            <a href="#">
              <i className="fas fa-sign-out-alt"></i>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}
