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

  return (
    <Layout pathname={props.location.pathname} title="Arc">
      <div style={{
        alignItems: 'flex-end',
        display: 'flex',
        justifyContent: 'space-around',
        width: '100vmin'
      }}>
        <div style={styleExample}>
          <ArcExampleDownload/>
          <div style={styleLabel}>{'Download'}</div>
        </div>
        <div style={styleExample}>
          <ArcExamplePlayback icon={props.icon}/>
          <div style={styleLabel}>{'Playback'}</div>
        </div>
        <div style={styleExample}>
          <ArcExampleRainbow/>
          <div style={styleLabel}>{'Rainbow'}</div>
        </div>
      </div>
    </Layout>
  );
}

ArcExamplesComponent.propTypes = {
  download: PropTypes.shape({
    percent: PropTypes.number
  }),
  icon: PropTypes.shape({
    color: PropTypes.string.isRequired
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  playback: PropTypes.shape({
    decimal: PropTypes.number,
    status: PropTypes.string
  }),
  rainbow: PropTypes.shape({
    degrees: PropTypes.number
  })
};

function mapStateToProps (state) {
  return {
    download: state.download,
    icon: state.icon,
    location: state.location,
    playback: state.playback,
    rainbow: state.rainbow
  };
}

export const ArcExamples = connect(mapStateToProps)(ArcExamplesComponent);
