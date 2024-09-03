'use strict';

import Hapi from '@hapi/hapi';
import Basic from '@hapi/basic';
import axios from 'axios';

const users = {
    luke: {
        username: 'Luke',
        password: 'DadSucks',  // Normalement, ce mot de passe devrait être haché
        name: 'Luke Skywalker',
        id: '2133d32a'
    }
};

const validate = async (request, username, password, h) => {
    const user = users[username.toLowerCase()];

    if (!user) {
        return { credentials: null, isValid: false };
    }

    const isValid = user.password === password;
    const credentials = { id: user.id, name: user.name };

    return { isValid, credentials };
};

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*']  // Permettre toutes les origines
            }
        }
    });

    await server.register(Basic);

    server.auth.strategy('simple', 'basic', { validate });

    server.auth.default('simple');

    // Route dynamique pour obtenir les données de SWAPI
    server.route({
        method: 'GET',
        path: '/{endpoint*}',  // Paramètre dynamique pour le chemin
        options: {
            auth: 'simple'
        },
        handler: async (request, h) => {
            const page = request.query.page || 1;  // Page actuelle, par défaut 1
            const { endpoint } = request.params;
            const baseUrl = 'https://swapi.dev/api/';
            const url = `${baseUrl}${endpoint}/?page=${page}`;

            try {
                const response = await axios.get(url);
                return response.data;
            } catch (error) {
                console.error(error);
                return h.response({ message: 'Failed to fetch data from SWAPI' }).code(500);
            }
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
