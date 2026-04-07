const myPosts = require("../data/myPosts")

// lista json di tutti i post, get                                        INDEX
function index(req, res) {
    res.json(myPosts)
}

// far vedere il singolo post nell id corrente, get/:id                   SHOW
function show(req, res) {
    const id = parseInt(req.params.id) // parseInt Necessario
    const post = myPosts.filter(post => post.id === id)
    res.json(post)
}

// Creazione nuovi posts, post                                            CREATE
function store(req, res) {
    res.send(`Creare nuovi posts ${req.params.id}`)
}

// cambiare tutto l elemento dell id corrente, put/:id                    UPDATE
function update(req, res) {
    res.send(`cambiare tutto dell elemento id ${req.params.id}`)
}

// modificare una piccola parte dell elemento id corrente, patch/:id      UPDATE
function modify(req, res) {
    res.send(`modificare una piccola parte dell id corrente ${req.params.id}`)
}

//eliminare il singolo elemento id corrente, delete/:id                    DELETE
function destroy(req, res) {

    const id = parseInt(req.params.id)
    const post = myPosts.find(singlePost => singlePost.id === id);
    
    if (!post) {
        return res.status(404).json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    // Rimuoviamo il post dai posts
    myPosts.splice(myPosts.indexOf(post), 1);
    // Rispondiamo al client confermando l'eliminazione
    return res.status(200).json({
        status: 200,
        message: "Post eliminato",
        data: post
    })
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