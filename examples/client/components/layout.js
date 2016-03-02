import {Link} from 'react-router';
import React, {PropTypes} from 'react';

const styles = {
  mirror: {color: 'transparent'},
  navigation: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100vmin'
  },
  title: {fontSize: 30},
  view: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: 220,
    justifyContent: 'space-around'
  }
};

export function Layout (props) {
  const {children, showBack, title} = props;

  return (
    <div style={styles.view}>
      <div style={styles.navigation}>
        {showBack ? <Link to="/">{'Back'}</Link> : null}
        <div style={styles.title}>{title ? `Ninja: ${title}` : 'Ninja'}</div>
        {showBack ? <div style={styles.mirror}>{'Back'}</div> : null}
      </div>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  showBack: PropTypes.bool,
  title: PropTypes.string
};
