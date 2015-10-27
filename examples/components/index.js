import React from 'react';

const {Component, PropTypes} = React;

export default class Index extends Component {
  constructor (props, context) {
    super(props, context);

    this.state = context.state || {index: []};
  }

  componentDidMount () {
    const {props, state} = this;
    const {params, route} = props;

    if (state.index.length > 0) { return; }

    const {action} = route.props;

    action(params).then(index => this.setState({index}));
  }

  render () {
    const {index} = this.state;

    return (
      <div style={{
        fontFamily: 'sans-serif',
        padding: '10px',
        margin: '10px auto'
      }}>
        {index.map(({key, name}) => <div key={key}>{name}</div>)}
      </div>
    );
  }
}

Index.contextTypes = {
  state: PropTypes.object
};
