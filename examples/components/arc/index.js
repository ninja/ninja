import {ArcExampleDownload} from './download';
import {ArcExamplePlayback} from './playback';
import {ArcExampleRainbow} from './rainbow';
import {Layout} from '../layout';
import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updatePlaybackStatus} from '../../actions';

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
  const {updatePlaybackStatus} = props.actions;

  function toggle () {
    updatePlaybackStatus(playbackStatus === 'playing' ? 'stopped' : 'playing');
  }

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
            status={playbackStatus}
            toggle={toggle}/>
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
  actions: PropTypes.shape({
    updatePlaybackStatus: PropTypes.func
  }),
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

function mapDispatchToProps (dispatch) {
  return {actions: bindActionCreators({updatePlaybackStatus}, dispatch)};
}

export const ArcExamples = connect(mapStateToProps, mapDispatchToProps)(ArcExamplesComponent);
