import React, { Component } from 'react'
import './styles.less'

export default class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>
          <i className="fab fa-github"></i>{' '}
          <a href="https://github.com/raoulus/react-webpack-template/">
            react-webpack-template (v{process.env.VERSION})
          </a>
        </p>
      </div>
    )
  }
}
