import fp from 'fastify-plugin'
import fastifyJwt from "@fastify/jwt";
import fs from 'fs';
import path from 'path';

export default fp(async function (app, opts) {
    const privateKey = fs.readFileSync(path.resolve(__dirname, '../.ssl/private.key'));
    const publicKey = fs.readFileSync(path.resolve(__dirname, '../.ssl/public.key'));

    app.register(fastifyJwt, {
        sign: {
            algorithm: 'ES256',
            key: privateKey,
            issuer: 'info.iutparis.fr'
        },
        verify: {
            algorithm: ['ES256'],
            key: publicKey
        }
    });
});
