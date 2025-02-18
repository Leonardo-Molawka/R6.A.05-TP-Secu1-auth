import { addUser, loginUser } from "../controllers/login.js";

export default async (app) => {
    app.post("/signup", addUser);
    app.post("/signin", loginUser);
};
