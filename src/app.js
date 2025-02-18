import fastify from "fastify";
import fastifyFormbody from "@fastify/formbody";
import { connectDB } from "./config/mongo.js"; // Connexion MongoDB
import jwtPlugin from "./plugins/jwt.js";
import userRoutes from "./routes/routes.js";
import bookRoutes from "./routes/books.js";

// Connexion à la base MongoDB
connectDB();

export const build = (opts = {}) => {
    const app = fastify(opts);

    app.register(jwtPlugin);
    app.register(fastifyFormbody);
    app.register(userRoutes);
    app.register(bookRoutes);

    return app;
};
