import {Arc} from 'ninja';
import React from 'react';

const degreesEnd = 0;
const degreesStart = -180;

export function ArcExampleRainbow () {
  return (
    <div style={{
      height: 50,
      overflow: 'hidden',
      width: 100
    }}>
      <Arc degreesEnd={degreesEnd} degreesStart={degreesStart} strokeStyle="red" width={100}>
        <Arc degreesEnd={degreesEnd} degreesStart={degreesStart} strokeStyle="orange" width={92}>
          <Arc degreesEnd={degreesEnd} degreesStart={degreesStart} strokeStyle="yellow" width={86}>
            <Arc degreesEnd={degreesEnd} degreesStart={degreesStart} strokeStyle="green" width={78}>
              <Arc degreesEnd={degreesEnd} degreesStart={degreesStart} strokeStyle="blue" width={70}>
                <Arc degreesEnd={degreesEnd} degreesStart={degreesStart} strokeStyle="indigo" width={62}>
                  <Arc degreesEnd={degreesEnd} degreesStart={degreesStart} strokeStyle="violet" width={54}/>
                </Arc>
              </Arc>
            </Arc>
          </Arc>
        </Arc>
      </Arc>
    </div>
  );
}
