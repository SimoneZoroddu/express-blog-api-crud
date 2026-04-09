const express = require("express")
const router = express.Router()

const postController = require("../controllers/postsController")


//lista json di tutti i post, get                                         INDEX
router.get("/", postController.index)

// far vedere il singolo post nell id corrente, get/:id                   SHOW
router.get("/:id", postController.show)

// Creazione nuovi posts, post                                            CREATE
router.post('/', postController.store)

// cambiare tutto l elemento dell id corrente, put/:id                    UPDATE
router.put("/:id", postController.update)

// modificare una piccola parte dell elemento id corrente, patch/:id      UPDATE
router.patch("/:id", postController.modify)

//eliminare il singolo elemento id corrente, delete/:id                   DELETE
router.delete("/:id", postController.destroy)

module.exports = { router }