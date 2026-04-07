const express = require("express")
const router = express.Router()
const posts = require("../data/posts")

//lista json di tutti i post, get presi                       SHOW
router.get("/", (req, res) => {
    res.json(posts)
})

// lista dei post salvati, post                               CREATE
router.post('/', (req, res) => {
    res.send("Salvare i nostri post")
})

// far vedere il singolo post nell id corrente                INDEX
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id) // parseInt Necessario
    const post = posts.filter(post => !(post.id === id))
    res.json(post)
})

// cambiare tutto l elemento dell id corrente                 UPDATE
router.put("/:id", (req, res) => {
    res.send(`cambiare tutto l elemento id ${req.params.id}`)
})

// modificare una piccola parte dell elemento id corrente     UPDATE
router.patch("/:id", (req, res) => {
    res.send(`cambiare una parte dell elemento id ${req.params.id}`)
})

//eliminare il singolo elemento id corrente                   DELETE
router.delete("/:id", (req, res) => {
    res.send(`rimuovere tutto l elemento id ${req.params.id}`)
})

module.exports = {router, posts}