const express = require("express")
const server = express()
const route = require("./routes")

server.use(route)
server.listen(3000, () => console.log("Rodando na Porta: 3000"))

