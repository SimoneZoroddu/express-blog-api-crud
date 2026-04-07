const myPosts = require("../data/myPosts")

// lista dei post salvati, post                               CREATE
function index(req, res) {
    res.json(myPosts)
}

// far vedere il singolo post nell id corrente                INDEX
function show(req, res) {
    const id = parseInt(req.params.id) // parseInt Necessario
    const post = myPosts.filter(post => post.id === id)
    res.json(post)
}


// cambiare tutto l elemento dell id corrente                 UPDATE
function store(req, res) {
    res.send(`Creare nuovi posts ${req.params.id}`)
}

// modificare una piccola parte dell elemento id corrente     UPDATE
function update(req, res) {
    res.send(`cambiare tutto dell elemento id ${req.params.id}`)
}

function modify(req, res) {
    res.send(`modificare una piccola parte dell id corrente ${req.params.id}`)
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