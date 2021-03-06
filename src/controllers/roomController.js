const DataBase = require("../db/config")

module.exports = {
    async create(req, res) {
        const db = await DataBase()
        const pass = req.body.password
        let roomId
        let isRoom = true
        while(isRoom) {
            for( var i = 0; i < 6; i++) {
                let idGenerate = Math.floor(Math.random() * 10).toString()
                i == 0 ? roomId = idGenerate 
                        : roomId += idGenerate
            }
    
            const dbRoomsId = await db.all(`SELECT id FROM rooms`)
    
            isRoom = dbRoomsId.some(dbRoomsId => dbRoomsId === roomId)
    
            if (!isRoom) {
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    "${pass}"
                )`)
            } 
        }

        await db.close()
    
        res.redirect(`/room/${roomId}`)
    },

    async open(req, res) {
        const db = await DataBase()
        const roomId = req.params.roomId
        const question = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
        let isNoQuestion

        if(question.length == 0 && questionRead.length == 0) {
            isNoQuestion = true
        } 
       

        res.render("room", {roomId: roomId, questions: question, questionsRead: questionRead, isNoQuestion: isNoQuestion})
    },

    enter(req, res) {
        const roomId = req.body.roomId
        res.redirect(`/room/${roomId}`)
    }
}