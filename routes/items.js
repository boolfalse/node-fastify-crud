
const items = require('./../items.js');
const itemSchema = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        name: { type: 'string' }
    }
};

// reply options for getting all the items
const getItemsOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: itemSchema
            }
        }
    },
    handler: async (request, reply) => {
        reply.send(items);
    }
}

// reply option for getting a single item
const getItemOptions = {
    schema: {
        response: {
            200: itemSchema
        }
    },
    handler: async (request, reply) => {
        const {id} = request.params;
        const item = items.find(item => item.id === parseInt(id));

        reply.send(item);
    }
}

function itemRoutes(fastify, options, done) {
    fastify.get('/items', getItemsOptions);
    fastify.get('/items/:id', getItemOptions);

    done();
}

module.exports = itemRoutes;
