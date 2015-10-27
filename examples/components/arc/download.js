import NinjaArc from 'ninja-arc';
import React from 'react';

const colorActive = 'rgb(14, 122, 254)';
const width = 44;

export default class ArcExampleDownload extends React.Component {
  render () {
    return (
      <NinjaArc percent={100} style={{
        stroke: colorActive,
        strokeWidth: 2,
        width
      }}>
        <NinjaArc percent={25} style={{
          stroke: colorActive,
          strokeLinecap: 'square',
          strokeWidth: 7,
          width
        }}>
          <div style={{
            backgroundColor: colorActive,
            height: 14,
            width: 14
          }}/>
        </NinjaArc>
      </NinjaArc>
    );
  }
}
