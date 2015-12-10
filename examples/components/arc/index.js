import {ArcExampleDownload} from './download';
import {ArcExamplePlayback} from './playback';
import {ArcExampleRainbow} from './rainbow';
import {Layout} from '../layout';
import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updatePlaybackStatus} from '../../actions';
import {prefixAll} from 'inline-style-prefixer';

const styles = {
  example: prefixAll({
    alignItems: 'center',
    display: '-webkit-flex;flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }),
  examples: prefixAll({
    alignItems: 'flex-end',
    display: '-webkit-flex;flex',
    justifyContent: 'space-around',
    width: '100vmin'
  }),
  label: {marginTop: '1vmin'}
};

function ArcExamplesComponent (props) {
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
      <div style={styles.examples}>
        <div style={styles.example}>
          <ArcExampleDownload percent={downloadPercent}/>
          <div style={styles.label}>{'Download'}</div>
        </div>
        <div style={styles.example}>
          <ArcExamplePlayback
            decimal={playbackDecimal}
            icon={props.icon}
            status={playbackStatus}
            toggle={toggle}/>
          <div style={styles.label}>{'Playback'}</div>
        </div>
        <div style={styles.example}>
          <ArcExampleRainbow degrees={rainbowDegrees}/>
          <div style={styles.label}>{'Rainbow'}</div>
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
