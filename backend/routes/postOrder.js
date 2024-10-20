const express = require('express');
const order = require("../models/postorder");

const router = express.Router();

router.post("/postorder",async(req,res)=>{
    const productName = req.body.pn;
    const quantity = req.body.q;
    const cod = req.body.c

    const save = new order({
        productName : productName,
        quantity : quantity,
        cod : cod
    })

    const savedorder = await save.save();
    res.json(savedorder);
});

module.exports = router;