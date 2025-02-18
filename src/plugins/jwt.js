import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import fastifyJwt from "@fastify/jwt";
import fp from "fastify-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const privateKeyPath = path.resolve(__dirname, "../.ssl/private.key");
const publicKeyPath = path.resolve(__dirname, "../.ssl/public.key");

console.log("🔍 Chemin private.key:", privateKeyPath);
console.log("🔍 Chemin public.key:", publicKeyPath);

export default fp(async function (app) {
    const privateKey = fs.readFileSync(privateKeyPath, "utf8");
    const publicKey = fs.readFileSync(publicKeyPath, "utf8");

    if (!privateKey || !publicKey) {
        throw new Error("Les clés JWT ne sont pas valides !");
    }

    app.register(fastifyJwt, {
        secret: {
            private: privateKey,
            public: publicKey,
        },
        sign: {
            algorithm: "ES256",
            issuer: "info.iutparis.fr",
        },
        verify: {
            algorithms: ["ES256"],
        },
    });
});
