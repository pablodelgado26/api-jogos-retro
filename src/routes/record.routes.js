import express from "express";
import recordController from "../controllers/record.controller.js";

const recordRouter = express.Router();

// GET /game - Listar todas as games
recordRouter.get("/", recordController.findAll);
// POST /game - Criar uma nova game
recordRouter.post("/", recordController.create);


export default recordRouter;
