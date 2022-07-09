
const {
    getItems,
    getItem,
    createItem,
    deleteItem,
    updateItem,
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
        },
        body: {
            type: 'object',
            // additionalProperties: false, // it will remove all the fields that isn't in the JSON schema
            required: ['name'],
            properties: {
                name: { type: 'string' }
            }
        },
    },
    handler: createItem,
}

// reply options for deleting an item
const deleteItemOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            }
        }
    },
    handler: deleteItem,
}

const updateItemOptions = {
    schema: {
        response: {
            200: itemSchema
        },
        body: {
            type: 'object',
            // additionalProperties: false, // it will remove all the fields that isn't in the JSON schema
            required: ['name'],
            properties: {
                name: { type: 'string' }
            }
        },
    },
    handler: updateItem,
}

function itemRoutes(fastify, options, done) {
    fastify.get('/items', getItemsOptions);
    fastify.get('/items/:id', getItemOptions);
    fastify.post('/items', createItemOptions);
    fastify.delete('/items/:id', deleteItemOptions);
    fastify.put('/items/:id', updateItemOptions);

    done();
}

module.exports = itemRoutes;
