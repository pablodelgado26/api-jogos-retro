import express from "express"

// Importar todas as rotas
import authRouter from "./auth.routes.js"
import gameRouter from "./game.routes.js"
import recordRouter from "./record.routes.js"

import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router();

//Rotas públicas
router.use("/auth", authRouter);

//Rotas protegidas
router.use(authMiddleware)
router.use("/record", recordRouter);
router.use("/game", gameRouter);


export default router