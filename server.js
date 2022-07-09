
const fastify = require('fastify')({ logger: true });
const PORT = 5000;

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
