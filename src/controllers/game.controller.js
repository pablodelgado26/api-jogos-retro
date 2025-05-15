import GameModel from "../models/game.model.js"

class GameController {
    async findAll(req, res) {
        const { name, platforms } = req.query;
        
        try {
            const games = await GameModel.findAll(name, platforms);

            return res.status(200).json(games);
        } catch (error) {
            console.error("Error finding all games", error);
            return res.status(500).json({ message: "Error finding all games", error });
        }
    }

    async create(req, res) {
        try {
            const { name, platforms } = req.body;

            if (!name || !platforms) {
                return res.status(400).json({ error: "Name and platforms fields are required!", });
            }

            const data = {
                name,
                platforms,
            };

            const newGame = await GameModel.create(data)

            return res.status(201).json({message: "New game successfully created!", newGame,});
        } catch (error) {
            console.error("Error creating a new game", error);
            return res.status(500).json({ error: "Error creating a new game" });
        }
    }
}

export default new GameController();