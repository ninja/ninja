import {Arc} from 'ninja';
import React from 'react';

const degrees = 180;
const degreesStart = -180;

export function ArcExampleRainbow () {
  return (
    <div style={{
      height: 50,
      overflow: 'hidden',
      width: 100
    }}>
      <Arc degrees={degrees} degreesStart={degreesStart} style={{
        stroke: 'red',
        width: 100
      }}>
        <Arc degrees={degrees} degreesStart={degreesStart} style={{
          stroke: 'orange',
          width: 92
        }}>
          <Arc degrees={degrees} degreesStart={degreesStart} style={{
            stroke: 'yellow',
            width: 86
          }}>
            <Arc degrees={degrees} degreesStart={degreesStart} style={{
              stroke: 'green',
              width: 78
            }}>
              <Arc degrees={degrees} degreesStart={degreesStart} style={{
                stroke: 'blue',
                width: 70
              }}>
                <Arc degrees={degrees} degreesStart={degreesStart} style={{
                  stroke: 'indigo',
                  width: 62
                }}>
                  <Arc degrees={degrees} degreesStart={degreesStart} style={{
                    stroke: 'violet',
                    width: 54
                  }}/>
                </Arc>
              </Arc>
            </Arc>
          </Arc>
        </Arc>
      </Arc>
    </div>
  );
}
