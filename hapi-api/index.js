'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server({ port: 3000, host: 'localhost' });

// server.route({
//     method: 'GET',
//     path: '/',
//     handler: function (request, reply) {
//         reply('Hello, Hapi world!');
//     }
// });

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`hapi-api running on ${server.info.uri}`);
});
