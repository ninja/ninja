import {Arc} from 'ninja';
import React, {PropTypes} from 'react';

const degreesStart = -180;
const styles = {
  blue: {stroke: 'blue', width: 70},
  green: {stroke: 'green', width: 78},
  indigo: {stroke: 'indigo', width: 62},
  orange: {stroke: 'orange', width: 92},
  red: {stroke: 'red', width: 100},
  violet: {stroke: 'violet', width: 54},
  wrapper: {height: 50, overflow: 'hidden', width: 100},
  yellow: {stroke: 'yellow', width: 86}
};

export function ArcExampleRainbow (props) {
  const {degrees} = props;

  return (
    <div style={styles.wrapper}>
      <Arc degrees={degrees} degreesStart={degreesStart} style={styles.red}>
        <Arc degrees={degrees} degreesStart={degreesStart} style={styles.orange}>
          <Arc degrees={degrees} degreesStart={degreesStart} style={styles.yellow}>
            <Arc degrees={degrees} degreesStart={degreesStart} style={styles.green}>
              <Arc degrees={degrees} degreesStart={degreesStart} style={styles.blue}>
                <Arc degrees={degrees} degreesStart={degreesStart} style={styles.indigo}>
                  <Arc degrees={degrees} degreesStart={degreesStart} style={styles.violet}/>
                </Arc>
              </Arc>
            </Arc>
          </Arc>
        </Arc>
      </Arc>
    </div>
  );
}

ArcExampleRainbow.propTypes = {
  degrees: PropTypes.number
};
