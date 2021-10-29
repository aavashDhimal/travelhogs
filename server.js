const express = require("Express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const db = require("./config/keys.js").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error"));

app.get("/", (req, res) => res.send("Hello"));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = 5000;

app.listen(port, () => console.log("server running on port " + port));
