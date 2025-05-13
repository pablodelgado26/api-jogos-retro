import express from "express";
import gameController from "../controllers/game.controller.js";

const gameRouter = express.Router();

// GET /game - Listar todas as games
gameRouter.get("/", gameController.findAll);


export default gameRouter;
