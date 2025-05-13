import prisma from "../../prisma/prisma.js";

class GameModel {
    /* Obter todos os jogos */
    async findAll() {
        const games = await prisma.game.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return {
            total: games.length,
            games,
        }
    }
}

export default new GameModel();