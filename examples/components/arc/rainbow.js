import NinjaArc from 'ninja-arc';
import React from 'react';

const degrees = 180;
const strokeLinecap = 'square';
const strokeWidth = 4;

export default class ArcExampleRainbow extends React.Component {
  render () {
    return (
      <div style={{display: 'inline-block', transform: 'rotate(-90deg)'}}>
        <NinjaArc degrees={degrees} style={{
          stroke: 'red',
          strokeLinecap,
          strokeWidth,
          width: 44
        }}>
          <NinjaArc degrees={degrees} style={{
            stroke: 'orange',
            strokeLinecap,
            strokeWidth,
            width: 40
          }}>
            <NinjaArc degrees={degrees} style={{
              stroke: 'yellow',
              strokeLinecap,
              strokeWidth,
              width: 36
            }}>
              <NinjaArc degrees={degrees} style={{
                stroke: 'green',
                strokeLinecap,
                strokeWidth,
                width: 32
              }}>
                <NinjaArc degrees={degrees} style={{
                  stroke: 'blue',
                  strokeLinecap,
                  strokeWidth,
                  width: 28
                }}>
                  <NinjaArc degrees={degrees} style={{
                    stroke: 'indigo',
                    strokeLinecap,
                    strokeWidth,
                    width: 24
                  }}>
                    <NinjaArc degrees={degrees} style={{
                      stroke: 'violet',
                      strokeLinecap,
                      strokeWidth,
                      width: 20
                    }}/>
                  </NinjaArc>
                </NinjaArc>
              </NinjaArc>
            </NinjaArc>
          </NinjaArc>
        </NinjaArc>
      </div>
    );
  }
}
