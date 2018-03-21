const Hapi = require('hapi');

const os = require("os");
const PORT = process.env.PORT || 80;

const server = Hapi.server({ port: PORT });

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return `Hello, Hapi world! from ${os.hostname()}`;
    }
});

const init = async () => {

    await server.start();
    console.log(`hapi api running on ${server.info.uri} at ${os.hostname()}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
