import React from 'react';
import radium, {Style} from 'radium';
import {renderToStaticMarkup} from 'react-dom/server';

const ServerStyle = radium(props => props.children);
const rules = {
  html: {
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0
  },
  body: {
    background: '#333',
    bottom: 0,
    color: 'white',
    fontFamily: '-apple-system, "Helvetica Neue", "Lucida Grande", sans-serif',
    fontSize: 20,
    left: 0,
    margin: 0,
    position: 'fixed',
    right: 0,
    top: 0
  },
  a: {color: 'rgb(0, 216, 255)'}
};

export function createStyleMarkup ({userAgent}) {
  return renderToStaticMarkup(
    <ServerStyle radiumConfig={{userAgent}}>
      <Style rules={rules}/>
    </ServerStyle>
  );
}
