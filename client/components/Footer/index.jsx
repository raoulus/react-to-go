import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.less'

export default class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <p>{this.props.text}</p>
  }
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
}
