
const fastify = require('fastify')({ logger: true });
const PORT = 3000;

const items = require('./items.js');

fastify.get('/api/items', async (request, reply) => {
    reply.send(items);
});

fastify.get('/api/items/:id', async (request, reply) => {
    const {id} = request.params;
    const item = items.find(item => item.id === parseInt(id));

    reply.send(item);
});

const start = async () => {
    try {
        await fastify.listen({
            port: PORT,
        });
        // fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();
