
const items = require('./../items.js');

module.exports = {
    getItems: async (request, reply) => {
        reply.send(items);
    },
    getItem: async (request, reply) => {
        const {id} = request.params;
        const item = items.find(item => item.id === parseInt(id));

        reply.send(item);
    },
}
