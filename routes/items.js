
const {
    getItems,
    getItem,
} = require('./../controllers/items.js');
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
    handler: getItems,
}

// reply option for getting a single item
const getItemOptions = {
    schema: {
        response: {
            200: itemSchema
        }
    },
    handler: getItem,
}

function itemRoutes(fastify, options, done) {
    fastify.get('/items', getItemsOptions);
    fastify.get('/items/:id', getItemOptions);

    done();
}

module.exports = itemRoutes;
