import {IconPause, IconPlay, IconStop} from 'ninja';
import {Layout} from './layout';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {prefixAll} from 'inline-style-prefixer';

function IconExamplesComponent (props) {
  const styles = {
    grid: prefixAll({
      alignItems: 'center',
      display: '-webkit-flex;flex',
      justifyContent: 'space-around',
      width: '100vmin'
    }),
    icon: {fill: props.icon.color, height: '10vmin'},
    iconWrapper: prefixAll({
      alignItems: 'center',
      display: '-webkit-flex;flex',
      flexDirection: 'column',
      justifyContent: 'center'
    })
  };

  return (
    <Layout pathname={props.location.pathname} title="Icon">
      <div style={styles.grid}>
        <div style={styles.iconWrapper}>
          <IconPause style={styles.icon}/>
          <div>{'pause'}</div>
        </div>
        <div style={styles.iconWrapper}>
          <IconPlay style={styles.icon}/>
          <div>{'play'}</div>
        </div>
        <div style={styles.iconWrapper}>
          <IconStop style={styles.icon}/>
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
