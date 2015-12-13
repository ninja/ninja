import {Icon} from './icon';
import React from 'react';

export class IconPause extends Icon {
  render () {
    return (
      <svg style={this.props.style} viewBox="16 16 32 32">
        <path d="M26,19c-1.657,0-3,1.343-3,3v20c0,1.657,1.343,3,3,3s3-1.343,3-3V22C29,20.343,27.657,19,26,19z M38,19 c-1.657,0-3,1.343-3,3v20c0,1.657,1.343,3,3,3s3-1.343,3-3V22C41,20.343,39.657,19,38,19z"/>
      </svg>
    );
  }
}
