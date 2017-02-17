import React, {Component, PropTypes} from 'react';
import css from './styles.less';

export default class Headline extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    return <h1>{this.props.text}</h1>;
  }
}
