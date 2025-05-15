import prisma from "../../prisma/prisma.js";

class GameModel {
    /* Obter todos os jogos */
    async findAll(name, platforms) {

        const where = {};

        if (name) {
            where.name = {
                contains: name,
            };
        }

        if (platforms) {
            where.platforms = {
                contains: platforms,
            };
        }

        const games = await prisma.game.findMany({
            orderBy: {
                createdAt: "desc",
            },
            where,
        });

        return {
            total: games.length,
            games,
        }
    }

    /* Criar um novo jogo */
    async create(data) {
        const game = await prisma.game.create({
            data,
        });

        return game;
    }
}

export default new GameModel();