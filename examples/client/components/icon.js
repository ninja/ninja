import {IconPause, IconPlay, IconRepeat, IconStop} from 'ninja';
import {Layout} from './layout';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

function IconExamplesComponent (props) {
  const styles = {
    grid: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-around'
    },
    icon: {fill: props.icon.color, height: 36, marginBottom: 6},
    iconWrapper: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: 18
    }
  };

  return (
    <Layout showBack title="Icon">
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
          <IconRepeat style={styles.icon}/>
          <div>{'repeat'}</div>
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
  icon: PropTypes.shape({color: PropTypes.string.isRequired})
};

function mapStateToProps (state) {
  return {icon: state.icon};
}

export const IconExamples = connect(mapStateToProps)(IconExamplesComponent);
