const router = require("express").Router();

router.get("/data",(req,res) =>{
    res.json({data : "mera muh mai lele"});
});

router.post("/bhej",(req,res)=>{
    const request = req.body;
    if(request.ping){
        res.json(request);
    }else{
        res.status(400).json({Error : "Bad rquest"});
    }
})

router.patch("/update",(req,res)=>{
     const request = req.body;
     if(request.name == "kk"){
        res.json({"ping":"pong"});
     }else{
        res.status(400);
     }
})

module.exports = router;