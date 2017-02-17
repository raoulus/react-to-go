import React, {Component, PropTypes} from 'react';
import Headline from 'components/Headline';
import css from './styles.less';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="app">
      <Headline text="Hellooo World" />
    </div>;
  }
}
