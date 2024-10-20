const router = require('express')();
const orders = require('../models/postorder');
const mongoose = require('mongoose');

router.get('/',async(req,res) => {
    try{
        const allOrders = await orders.find();
        res.json(allOrders);
    }catch(err){
        console.log(err);
    }
});

router.get("/:id",async(req,res) => {
    try{
        const order = await orders.findById(req.params.id);
        res.json(order);
    }catch(err){
        console.log(err);
    }
});

module.exports = router;