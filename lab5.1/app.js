const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const shopRouter = require("./route/shop");
const addRouter =require("./route/add-product");
app.set("view engine", "pug");
app.set('views', "views");
// de sdung css file tinh
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));

app.use(addRouter);
app.use(shopRouter);
app.use((req,res)=>{
    res.status(404).render('404')
})
app.listen(3000);