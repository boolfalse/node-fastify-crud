
const fastify = require('fastify')({ logger: true });
fastify.register(require('@fastify/swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'Fastify API',
            description: 'Fastify API',
            version: '1.0.0'
        }
    }
});

fastify.register(require('./routes/items.js'), { prefix: '/api' });

const PORT = 3000;
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
