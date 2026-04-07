const express = require("express")
const router = express.Router()
const posts = require("../data/myPosts")
const postController = require("../controllers/postsController")


// far vedere il singolo post nell id corrente                INDEX
router.get("/", postController.show)

//lista json di tutti i post, get presi                       SHOW
router.get("/:id", postController.index)

// lista dei post salvati, post                               CREATE
router.post('/', postController.store)

// cambiare tutto l elemento dell id corrente                 UPDATE
router.put("/:id", postController.update)

// modificare una piccola parte dell elemento id corrente     UPDATE
router.patch("/:id", postController.modify)

//eliminare il singolo elemento id corrente                   DELETE
router.delete("/:id", postController.destroy)

module.exports = { router }