const express = require("express")
const router = express.Router()

const posts = [
    {
        id: 1,
        title: 'Introduzione al Blog',
        content: 'Benvenuti nel mio blog personale dove condivido pensieri e idee.',
        image: '/images/images.jpg',
        tags: ['introduzione', 'blog']
    },
    {
        id: 2,
        title: 'Tecnologia Moderna',
        content: 'Esplorando le ultime tendenze in tecnologia e sviluppo software.',
        image: '/images/image2.jpg',
        tags: ['tecnologia', 'sviluppo']
    },
    {
        id: 3,
        title: 'Ricette Sane',
        content: 'Ricette semplici e salutari per la cucina quotidiana.',
        image: '/images/image3.jpg',
        tags: ['cucina', 'salute']
    },
    {
        id: 4,
        title: 'Viaggi e Avventure',
        content: 'Storie e consigli sui miei viaggi intorno al mondo.',
        image: '/images/image4.jpg',
        tags: ['viaggi', 'avventure']
    },
    {
        id: 5,
        title: 'Fotografia Naturale',
        content: 'Consigli per catturare la bellezza della natura attraverso la fotografia.',
        image: '/images/image5.jpg',
        tags: ['fotografia', 'natura']
    }
];

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