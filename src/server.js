import { build } from "./app.js";

const app = build({ logger: false });

const start = async () => {
    try {
        console.log("🚀 Serveur en cours de démarrage...");
        await app.listen({ port: 3000, host: "0.0.0.0" });
        console.log("✅ Serveur démarré sur le port 3000");
    } catch (err) {
        console.error("❌ Erreur au démarrage du serveur :", err);
        process.exit(1);
    }
};

start();
