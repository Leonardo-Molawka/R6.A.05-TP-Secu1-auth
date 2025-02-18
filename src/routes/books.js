import { Book } from "../models/book.js";

export default function bookRoutes(app) {
    app.post("/books", async (req, res) => {
        try {
            const { titre, auteur, description, format } = req.body;
            const newBook = new Book({ titre, auteur, description, format });
            await newBook.save();
            res.status(201).send(newBook);
        } catch (error) {
            res.status(500).send({ message: "Erreur serveur", error });
        }
    });

    app.get("/books", async (req, res) => {
        try {
            const books = await Book.find({}, "titre auteur description format");
            res.send(books);
        } catch (error) {
            res.status(500).send({ message: "Erreur serveur", error });
        }
    });

    app.get("/books/:id", async (req, res) => {
        try {
            const book = await Book.findById(req.params.id, "titre auteur description format");
            if (!book) return res.status(404).send({ message: "Livre non trouvé" });
            res.send(book);
        } catch (error) {
            res.status(500).send({ message: "Erreur serveur", error });
        }
    });

    app.put("/books/:id", async (req, res) => {
        try {
            const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedBook) return res.status(404).send({ message: "Livre non trouvé" });
            res.send(updatedBook);
        } catch (error) {
            res.status(500).send({ message: "Erreur serveur", error });
        }
    });

    app.delete("/books/:id", async (req, res) => {
        try {
            const deletedBook = await Book.findByIdAndDelete(req.params.id);
            if (!deletedBook) return res.status(404).send({ message: "Livre non trouvé" });
            res.send({ message: "Livre supprimé avec succès" });
        } catch (error) {
            res.status(500).send({ message: "Erreur serveur", error });
        }
    });
}
