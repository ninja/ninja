import {Component, PropTypes} from 'react';

export default class NinjaContext extends Component {
  getChildContext () {
    return {state: this.props.state};
  }

  render () {
    return this.props.children;
  }
}

NinjaContext.childContextTypes = {
  state: PropTypes.object.isRequired
};

NinjaContext.propTypes = {
  children: PropTypes.node,
  state: PropTypes.shape({})
};

