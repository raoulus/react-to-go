import React, { Component } from 'react'
import marked from 'marked'
import readme from '../../../README.md'
import './styles.less'

export default class Readme extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <article dangerouslySetInnerHTML={{ __html: marked(readme) }}></article>
      </section>
    )
  }
}
