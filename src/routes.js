const express = require("express")
const routes = express.Router()
const questionController  = require("./controllers/questionController")
const roomController = require("./controllers/roomController")
routes.get("/", (req, res) => res.render("index", {page: "enter-room"}))
routes.get("/create-pass", (req, res) => res.render("index", {page: "create-pass"}))
routes.get("/room/:roomId", (req, res)  => res.render("room"))

routes.post("/question/:room/:question/:action", questionController.index)
routes.post("/create-room", roomController.create)
module.exports = routes