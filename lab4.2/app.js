const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./router/route");
const app = express();
app.use(bodyParser.json());
app.use(router)

app.listen(3000)