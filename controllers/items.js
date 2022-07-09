
const { v4: uuidv4 } = require('uuid');
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
    createItem: async (request, reply) => {
        const {name} = request.body;
        const item = {
            id: uuidv4(),
            name,
        };
        items.push(item);

        reply.code(201).send(item);
    }
}
