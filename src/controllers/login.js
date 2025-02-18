import { createHash } from "node:crypto";
import { User } from "../models/user.js";

export const addUser = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = createHash("sha256").update(password).digest("hex");

    let user = await User.findOne({ email });

    if (user) {
        return res.status(401).send({ message: "Utilisateur déjà enregistré" });
    }

    user = new User({ email, password: hashedPassword, role: "utilisateur" });
    await user.save();

    res.status(200).send({ message: "Utilisateur enregistré", user });
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = createHash("sha256").update(password).digest("hex");

    const user = await User.findOne({ email, password: hashedPassword });

    if (!user) {
        return res.status(401).send({ message: "Identifiants incorrects" });
    }

    const token = req.server.jwt.sign({ email: user.email, role: user.role });

    res.status(200).send({ message: "Authentification réussie", token });
};
