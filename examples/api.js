const index = [
  {key: 'arc', name: 'Arc'},
  {key: 'icon', name: 'Icon'}
];

function register (server, options, next) {
  server.route({
    method: 'GET',
    path: '/api/{key}',
    handler: (request, reply) => {
      const {key} = request.params;
      const component = index.find(component => {
        return component.key === key;
      });

      if (typeof component === 'undefined') {
        return reply({component: {
          key,
          name: `Component ${key} not found.`
        }}).code(404);
      }

      reply({component});
    }
  });

  server.route({
    method: 'GET',
    path: '/api',
    handler: (request, reply) => reply({index})
  });

  next();
}

register.attributes = {name: 'Ninja Roles API'};

export default {register};
