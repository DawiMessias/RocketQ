const DataBase = require("../db/config")

module.exports = {
    async create(req, res) {
        const db = await DataBase()
        const pass = req.body.password
        let roomId = 0

        for( let i = 0; i < 6; i++) {
            let igGenerate = Math.floor(Math.random() * 10).toString()
            i == 0 ? roomId = igGenerate 
                    : roomId += igGenerate
        }

        await db.run(`INSERT INTO rooms (
            id,
            pass
        ) VALUES (
            ${parseInt(roomId)},
            ${pass}
        )`)
        await db.close()

        res.redirect(`/room/${roomId}`)
    }
}