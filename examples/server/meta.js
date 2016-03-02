import DocumentMeta from 'react-document-meta';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

const meta = {
  description: 'Ninja UI.',
  meta: {
    charSet: 'utf-8',
    name: {
      keywords: 'ninja,ui,ninjaui,user,interface,react,component,arc,icon',
      viewport: 'user-scalable=no,initial-scale=1'
    }
  }
};

export function createMetaMarkup ({component}) {
  meta.title = component ? `Ninja: ${component}` : 'Ninja';

  renderToStaticMarkup(<DocumentMeta {...meta}/>);

  return DocumentMeta.renderAsHTML();
}
