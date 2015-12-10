import {Link} from 'react-router';
import React, {PropTypes} from 'react';
import {prefixAll} from 'inline-style-prefixer';

const styles = {
  mirror: {color: 'transparent'},
  logo: {fontSize: '10vmin'},
  navigation: prefixAll({
    alignItems: 'center',
    display: '-webkit-flex;flex',
    justifyContent: 'space-around',
    width: '100vmin'
  }),
  title: {fontSize: '8vmin'},
  view: prefixAll({
    alignItems: 'center',
    display: '-webkit-flex;flex',
    flexDirection: 'column',
    height: '60vmin',
    justifyContent: 'space-around'
  })
};

export function Layout (props) {
  const {children, pathname, title} = props;
  const showBack = pathname && pathname !== '/';

  return (
    <div style={styles.view}>
      <div style={styles.logo}>{'Ninja'}</div>
      <div style={styles.navigation}>
        {showBack ? <Link to="/">{'Back'}</Link> : null}
        {title ? <div style={styles.title}>{title}</div> : null}
        {showBack ? <div style={styles.mirror}>{'Back'}</div> : null}
      </div>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  pathname: PropTypes.string,
  title: PropTypes.string
};
