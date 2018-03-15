const Hapi = require('hapi');

const server = Hapi.server({ port: 4000, host: 'localhost' });

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'Hello, Hapi world!';
    }
});

const init = async () => {

    await server.start();
    console.log(`hapi api running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();