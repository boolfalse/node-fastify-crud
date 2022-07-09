
const {
    getItems,
    getItem,
    createItem,
} = require('./../controllers/items.js');
const itemSchema = {
    type: 'object',
    properties: {
        id: { type: 'string' },
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

// reply options for creating a new item
const createItemOptions = {
    schema: {
        response: {
            201: itemSchema
        }
    },
    handler: createItem,
}

function itemRoutes(fastify, options, done) {
    fastify.get('/items', getItemsOptions);
    fastify.get('/items/:id', getItemOptions);
    fastify.post('/items', createItemOptions);

    done();
}

module.exports = itemRoutes;
