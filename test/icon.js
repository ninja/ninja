// import NinjaIcon from 'ninja-icon';
// import React from 'react';
// import {findDOMNode} from 'react-dom';
import {jsdom} from 'jsdom';
// import {renderIntoDocument} from 'react-addons-test-utils';
import test from 'tape';

test('icon', t => {
  const document = jsdom('<!doctype html><html><body></body></html>');
  const window = document.defaultView;

  global.document = document;
  global.window = window;

  // const props = {graphic: 'stop'};
  // const component = renderIntoDocument(<NinjaIcon {...props}/>);
  // const node = findDOMNode(component);

  // t.equals(node.className, 'testClassName');
  // t.equals(node.textContent, 'testTextContent');
  t.end();
});
