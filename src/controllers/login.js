import {createHash} from "node:crypto"

const users = []    // Simule BDD pour le stockage des utilisateurs
const role = ['admin', 'utilisateur']

export const addUser = async (req, res) => {
    const {email, password} = req.body
    const hashedPassword = createHash("sha256").update(password).digest().toString("hex")

    let user = users.find((u) => u.email === email && u.password === hashedPassword)
    if (user) {
        res.status(401).send({
            message: "Utilisateur déjà enregistré",
            user
        })
    }
    // Ajouter l'utilisateur avec un rôle aléatoire
    const randomRole = role[Math.floor(Math.random() * role.length)];
    const newUser = { email, password: hashedPassword, role: randomRole };
    users.push(newUser);

    res.status(200).send({
        message: "Utilisateur enregistré",
        user: newUser
    });
}

export const loginUser = async function (req, res) {
    const { email, password } = req.body;
    const hashedPassword = createHash("sha256").update(password).digest().toString("hex");

    // Vérifier si l'utilisateur existe
    let user = users.find((u) => u.email === email && u.password === hashedPassword);
    if (!user) {
        return res.status(401).send({
            message: "Utilisateur non-identifié"
        });
    }

    // Générer un jeton JWT
    const token = app.jwt.sign({ email: user.email, role: user.role });

    res.status(200).send({
        message: "Authentification réussie",
        token
    });
};
