import {Link} from 'react-router';
import React, {PropTypes} from 'react';

export function Layout (props) {
  const {children, pathname, title} = props;
  const showBack = pathname && pathname !== '/';

  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: '60vmin',
      justifyContent: 'space-around'
    }}>
      <div style={{
        fontSize: '10vmin'
      }}>{'Ninja'}</div>
      <div style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        width: '100vmin'
      }}>
        {showBack ? <Link to="/">{'Back'}</Link> : null}
        {title ? <div style={{fontSize: '8vmin'}}>{title}</div> : null}
        {showBack ? <div style={{color: 'transparent'}}>{'Back'}</div> : null}
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
