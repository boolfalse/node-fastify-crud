
const fastify = require('fastify')({ logger: true });
const PORT = 3000;

const items = require('./items.js');

fastify.get('/api/items', async (request, reply) => {
    reply.send(items);
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
