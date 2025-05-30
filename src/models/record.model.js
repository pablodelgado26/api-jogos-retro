import prisma from "../../prisma/prisma.js";

class RecordModel {
    /* Obter todos os recordes */
    async findAll() {
        const records = await prisma.record.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return {
            total: records.length,
            records,
        }
    }

    /* Criar um novo recorde */
    async create(data) {
        const record = await prisma.record.create({
            data,
        });

        return record;
    }
}

export default new RecordModel();