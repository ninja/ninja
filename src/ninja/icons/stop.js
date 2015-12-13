import {Icon} from './icon';
import React from 'react';

export class IconStop extends Icon {
  render () {
    return (
      <svg style={this.props.style} viewBox="14 14 36 36">
        <path d="M43,18H21c-1.657,0-3,1.343-3,3v22c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3V21C46,19.343,44.657,18,43,18z"/>
      </svg>
    );
  }
}
