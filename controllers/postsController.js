const myPosts = require("../data/myPosts")

// far vedere il singolo post nell id corrente                INDEX
function index(req, res) {
    const id = parseInt(req.params.id) // parseInt Necessario
    const post = myPosts.filter(post => post.id === id)
    res.json(post)
}

// lista dei post salvati, post                               CREATE
function show(req, res) {
    res.json(myPosts)
}

// cambiare tutto l elemento dell id corrente                 UPDATE
function store(req, res) {
    res.send(`cambiare tutto l elemento id ${req.params.id}`)
}

// modificare una piccola parte dell elemento id corrente     UPDATE
function update(req, res) {
    res.send(`cambiare una parte dell elemento id ${req.params.id}`)
}

function modify(req, res) {
    res.send(`rimuovere tutto l elemento id ${req.params.id}`)
}

//eliminare il singolo elemento id corrente                   DELETE
function destroy(req, res) {
    res.send(`rimuovere tutto l elemento id ${req.params.id}`)
}


module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}



/*    

const id = parseInt(req.params.id) // parseInt Necessario
const post = posts.filter(post => !(post.id === id))
res.json(post)


let filteredMenu = myPosts;

    if (req.query.posts) {
        filteredMenu = myPosts.filter(
            post => post.posts.includes(req.query.posts)
        );
    }

    res.json(filteredMenu);
*/