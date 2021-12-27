module.exports = {
    create(req, res) {
        let roomId = req.body.password

        res.redirect(`/room/${roomId}`)
    }
}