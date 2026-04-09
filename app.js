const express = require('express');
const app = express();
const { router: routerPosts, posts} = require("./routers/posts")

function pageNotFound(req, res, next) {
    res.status(404)
    res.json({
      error: "Not Found any Page",
      message: "Pagina non trovata"
    });
}

function errorsHandler(err, req, res, next) {
    res.status(500)
    res.json({
      error: err.message
    });
}

// Serve static files from /public directory under /images path
app.use(express.json())
app.use('/images', express.static('public'));
app.use("/posts", routerPosts)

// Route for root
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

app.use(pageNotFound)

app.use(errorsHandler)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://127.0.0.1:${PORT}`);
});