var Menu = {
  getMenu: (request, reply) => {
    reply('hi!');
  },

  addToMenu: (request, reply) => {
    let name = encodeURIComponent(request.params.name);
    reply(`hi ${name}!`);
  },

  deleteMenuItem: (request, reply) => {
    let something;
  }
};

module.exports = Menu;
