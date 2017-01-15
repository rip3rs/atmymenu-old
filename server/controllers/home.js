
var home = {
  start: function (request, reply) {
      reply('hi!');
    },

  hiTo: function (request, reply) {
      let name = encodeURIComponent(request.params.name);
      reply(`hi ${name}!`);
    },
};

module.exports = home;
