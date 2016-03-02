import {Arc} from 'ninja';
import React, {Component, PropTypes} from 'react';

const degreesStart = -180;
const styles = {parent: {height: 50, overflow: 'hidden'}};

export class ArcExampleRainbow extends Component {
  render () {
    const {degrees} = this.props;

    return (
      <div style={styles.parent}>
        <Arc
          degrees={degrees}
          degreesStart={degreesStart}
          stroke="red"
          width={100}>
          <Arc
            degrees={degrees}
            degreesStart={degreesStart}
            stroke="orange"
            width={92}>
            <Arc
              degrees={degrees}
              degreesStart={degreesStart}
              stroke="yellow"
              width={86}>
              <Arc
                degrees={degrees}
                degreesStart={degreesStart}
                stroke="green"
                width={78}>
                <Arc
                  degrees={degrees}
                  degreesStart={degreesStart}
                  stroke="blue"
                width={70}>
                  <Arc
                    degrees={degrees}
                    degreesStart={degreesStart}
                    stroke="indigo"
                    width={62}>
                    <Arc
                      degrees={degrees}
                      degreesStart={degreesStart}
                      stroke="violet"
                      width={54}/>
                  </Arc>
                </Arc>
              </Arc>
            </Arc>
          </Arc>
        </Arc>
      </div>
    );
  }
}

ArcExampleRainbow.propTypes = {degrees: PropTypes.number};
