import ArcExampleDownload from './download';
import ArcExamplePlay from './play';
import ArcExampleRainbow from './rainbow';
import React from 'react';

const {Component, PropTypes} = React;

export default class ArcExamples extends Component {
  constructor (props, context) {
    super(props, context);

    this.state = context.state;
  }

  componentDidMount () {
    const {props, state} = this;
    const {route} = props;

    if (state.component) { return; }

    const {action} = route.props;

    action().then(state => this.setState(state));
  }

  render () {
    const {name} = this.state.component;

    return (
      <div style={{
        fontFamily: 'sans-serif',
        padding: '10px',
        margin: '10px auto'
      }}>
        <div>{name}</div>
        <ArcExampleDownload/>
        <ArcExamplePlay/>
        <ArcExampleRainbow/>
      </div>
    );
  }
}

ArcExamples.contextTypes = {
  state: PropTypes.object
};
