var home = {
  start: (request, reply) => {
      reply('hi!');
    },

  hiTo: (request, reply) => {
      let name = encodeURIComponent(request.params.name);
      reply(`hi ${name}!`);
    },
};

module.exports = home;
