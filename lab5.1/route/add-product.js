const express = require("express");
const router = express.Router();
router.get("/add-product",(req,res)=>{
    console.log("add-pro", req.body)
    res.render("add-product", {title:"Add Product"})
})
router.post("/product",(req,res)=>{
    console.clear();
    console.log(req.body);
    console.log(req.body.product);
    res.redirect("/");
})

module.exports = router;