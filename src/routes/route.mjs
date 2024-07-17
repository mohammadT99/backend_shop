import express from 'express'

const Route = express.Router()


Route.get("/test" , (req , res) => res.send("hello"))



module.exports = Route