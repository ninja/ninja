import 'isomorphic-fetch';

const {fetch} = global;

export function fetchComponent (key) {
  return fetch(`http://localhost:3000/api/${key}`)
    .then(response => response.json());
}

export function fetchIndex () {
  return fetch('http://localhost:3000/api')
    .then(response => response.json());
}
