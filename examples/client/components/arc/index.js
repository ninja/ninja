import {ArcExampleDownload} from './download';
import {ArcExamplePlayback} from './playback';
import {ArcExampleRainbow} from './rainbow';
import {Layout} from '../layout';
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {reduxForm} from 'redux-form';
import {updatePlaybackStatus} from '../../actions';

const styles = {
  example: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  form: {
    alignItems: 'flex-end',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100vmin'
  },
  input: {marginTop: 24, width: 64},
  label: {marginTop: '1vmin'}
};

class ArcExamplesComponent extends Component {
  render () {
    const {
      actions: {updatePlaybackStatus},
      arc: {playbackStatus},
      fields: {downloadPercent, playbackDecimal, rainbowDegrees}
    } = this.props;

    function toggle () {
      updatePlaybackStatus(playbackStatus === 'playing' ? 'stopped' : 'playing');
    }

    return (
      <Layout showBack title="Arc">
        <form style={styles.form}>
          <div style={styles.example}>
            <ArcExampleDownload percent={parseInt(downloadPercent.value, 10)}/>
            <input max={100} min={0} {...downloadPercent} style={styles.input} type="range"/>
            <div style={styles.label}>{'Download'}</div>
          </div>
          <div style={styles.example}>
            <ArcExamplePlayback
              decimal={parseFloat(playbackDecimal.value)}
              status={playbackStatus}
              toggle={toggle}/>
            <input {...playbackDecimal} max={1} min={0} step={0.01} style={styles.input} type="range"/>
            <div style={styles.label}>{'Playback'}</div>
          </div>
          <div style={styles.example}>
            <ArcExampleRainbow degrees={parseInt(rainbowDegrees.value, 10)}/>
            <input {...rainbowDegrees} max={180} min={0} style={styles.input} type="range"/>
            <div style={styles.label}>{'Rainbow'}</div>
          </div>
        </form>
      </Layout>
    );
  }
}

ArcExamplesComponent.propTypes = {
  actions: PropTypes.shape({updatePlaybackStatus: PropTypes.func}),
  arc: PropTypes.shape({playbackStatus: PropTypes.string}),
  fields: PropTypes.object,
  icon: PropTypes.shape({color: PropTypes.string.isRequired}),
  location: PropTypes.shape({pathname: PropTypes.string.isRequired}).isRequired
};

function mapStateToProps (state) {
  return {arc: state.arc, icon: state.icon};
}

function mapDispatchToProps (dispatch) {
  return {actions: bindActionCreators({updatePlaybackStatus}, dispatch)};
}

export const ArcExamples = reduxForm({
  fields: ['downloadPercent', 'playbackDecimal', 'rainbowDegrees'],
  form: 'arc',
  initialValues: {downloadPercent: 25, playbackDecimal: 0.25, rainbowDegrees: 180}
}, mapStateToProps, mapDispatchToProps)(ArcExamplesComponent);
