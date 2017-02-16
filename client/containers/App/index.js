import React, {Component, PropTypes} from 'react';
import Headline from 'components/Headline';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Headline text="Hellooo World" />
    </div>;
  }
}
