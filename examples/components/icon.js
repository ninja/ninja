import React from 'react';
import NinjaIcon from 'ninja-icon';
import graphics from 'ninja-graphics';

const {Component} = React;
const keys = Object.keys(graphics);

export default class Icon extends Component {
  render () {
    return (
      <div style={{
        fontFamily: 'sans-serif',
        padding: '10px',
        margin: '10px auto'
      }}>
        {keys.map(graphic => <NinjaIcon graphic={graphic} key={graphic}/>)}
      </div>
    );
  }
}
