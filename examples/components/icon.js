import {IconPause, IconPlay, IconStop} from 'ninja';
import {Layout} from './layout';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

function IconExamplesComponent (props) {
  const styleIcon = {fill: props.icon.color, height: '10vmin'};
  const styleIconWrapper = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  return (
    <Layout pathname={props.location.pathname} title="Icon">
      <div style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        width: '100vmin'
      }}>
        <div style={styleIconWrapper}>
          <IconPause style={styleIcon}/>
          <div>{'pause'}</div>
        </div>
        <div style={styleIconWrapper}>
          <IconPlay style={styleIcon}/>
          <div>{'play'}</div>
        </div>
        <div style={styleIconWrapper}>
          <IconStop style={styleIcon}/>
          <div>{'stop'}</div>
        </div>
      </div>
    </Layout>
  );
}

IconExamplesComponent.propTypes = {
  icon: PropTypes.shape({
    color: PropTypes.string.isRequired
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

function mapStateToProps (state) {
  return {icon: state.icon, location: state.location};
}

export const IconExamples = connect(mapStateToProps)(IconExamplesComponent);
