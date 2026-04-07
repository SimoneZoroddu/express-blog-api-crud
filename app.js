const express = require('express');
const app = express();
const { router: routerPosts, posts} = require("./routers/posts")

// Serve static files from /public directory under /images path
app.use('/images', express.static('public'));
app.use("/posts", routerPosts)

// Route for root
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://127.0.0.1:${PORT}`);
});