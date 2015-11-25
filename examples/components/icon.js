import {Icon} from 'ninja';
import {Layout} from './layout';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

const keys = ['pause', 'play', 'stop'];

function IconExamplesComponent (props) {
  return (
    <Layout pathname={props.location.pathname} title="Icon">
      <div style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        width: '100vmin'
      }}>
        {keys.map(key => {
          return (
            <div key={key} style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Icon graphic={key} style={{
                fill: props.icon.color,
                height: '10vmin'
              }}/>
              <div>{key}</div>
            </div>
          );
        })}
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
