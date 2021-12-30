const express = require("express")
const routes = express.Router()
const questionController  = require("./controllers/questionController")
const roomController = require("./controllers/roomController")

routes.get("/", (req, res) => res.render("index", {page: "enter-room"}))
routes.get("/create-pass", (req, res) => res.render("index", {page: "create-pass"}))

routes.get("/room/:roomId", roomController.open)
routes.post("/create-room", roomController.create)

routes.post("/question/create/:room", questionController.create)
routes.post("/question/:room/:question/:action", questionController.index)
module.exports = routes