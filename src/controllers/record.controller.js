import RecordModel from "../models/record.model.js"

class RecordController {
    async findAll(req, res) {
        try {
            const records = await RecordModel.findAll();

            return res.status(200).json(records);
        } catch (error) {
            console.error("Error finding all records", error);
            return res.status(500).json({ message: "Error finding all records", error });
        }
    }

    async create(req, res) {
        try {
            const { score, screenShot, userId, gameId } = req.body;

            if (!score || !screenShot || !userId || !gameId) {
                return res.status(400).json({ error: "Score, Screenshot, userId and gameId fields are required!", });
            }

            const data = {
                score,
                screenShot,
                userId,
                gameId,
            };

            const newRecord = await RecordModel.create(data)

            return res.status(201).json({message: "New record successfully created!", newRecord,});
        } catch (error) {
            console.error("Error creating a new record", error);
            return res.status(500).json({ error: "Error creating a new record" });
        }
    }
}

export default new RecordController();