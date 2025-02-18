import mongoose from "mongoose";

const mongoURI = "mongodb://localhost:27017/booksAPI";

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {});
        console.log("✅ MongoDB connecté !");
    } catch (error) {
        console.error("❌ Erreur de connexion MongoDB :", error);
        process.exit(1);
    }
};
