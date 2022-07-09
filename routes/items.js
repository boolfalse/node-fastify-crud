
const items = require('./../items.js');

// reply options for getting all the items
const getItemsOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        name: { type: 'string' }
                    }
                }
            }
        }
    }
}

// reply option for getting a single item
const getItemOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    name: { type: 'string' }
                }
            }
        }
    }
}

function itemRoutes(fastify, options, done) {
    fastify.get('/items', getItemsOptions, async (request, reply) => {
        reply.send(items);
    });

    fastify.get('/items/:id', getItemOptions, async (request, reply) => {
        const {id} = request.params;
        const item = items.find(item => item.id === parseInt(id));

        reply.send(item);
    });

    done();
}

module.exports = itemRoutes;
