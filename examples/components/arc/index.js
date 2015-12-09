import {ArcExampleDownload} from './download';
import {ArcExamplePlayback} from './playback';
import {ArcExampleRainbow} from './rainbow';
import {Layout} from '../layout';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

function ArcExamplesComponent (props) {
  const styleExample = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };
  const styleLabel = {
    marginTop: '1vmin'
  };
  const {
    downloadPercent,
    playbackDecimal,
    playbackStatus,
    rainbowDegrees
  } = props.arc;

  return (
    <Layout pathname={props.location.pathname} title="Arc">
      <div style={{
        alignItems: 'flex-end',
        display: 'flex',
        justifyContent: 'space-around',
        width: '100vmin'
      }}>
        <div style={styleExample}>
          <ArcExampleDownload percent={downloadPercent}/>
          <div style={styleLabel}>{'Download'}</div>
        </div>
        <div style={styleExample}>
          <ArcExamplePlayback
            decimal={playbackDecimal}
            icon={props.icon}
            status={playbackStatus}/>
          <div style={styleLabel}>{'Playback'}</div>
        </div>
        <div style={styleExample}>
          <ArcExampleRainbow degrees={rainbowDegrees}/>
          <div style={styleLabel}>{'Rainbow'}</div>
        </div>
      </div>
    </Layout>
  );
}

ArcExamplesComponent.propTypes = {
  arc: PropTypes.shape({
    downloadPercent: PropTypes.number,
    playbackDecimal: PropTypes.number,
    playbackStatus: PropTypes.string,
    rainbowDegrees: PropTypes.number
  }),
  icon: PropTypes.shape({
    color: PropTypes.string.isRequired
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

function mapStateToProps (state) {
  return {arc: state.arc, icon: state.icon};
}

export const ArcExamples = connect(mapStateToProps)(ArcExamplesComponent);
