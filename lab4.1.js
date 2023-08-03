const http =require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use((req, res)=>{
    const url = req.url
    if(url === "/"){
        res.send("<p>The Middleware that handles just /</p>")
        res.end();
    }
    if(url === "/users"){
        res.send("<p>The Middleware that handles just /users</p>")
        res.end();
    }
});
server.listen(3000)