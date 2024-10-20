const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true,
}));

mongoose.connect("mongodb://127.0.0.1:27017/test").then(()=> console.log("Database Connected")).catch(err => console.log(err));

app.listen(3000,()=>{
    console.log("UP");
});

app.get("/",(req,res)=>{
    res.send("hello");
});

const routes = require("./routes/routes");
const orderroute = require("./routes/postOrder");
const getOrder = require("./routes/getorders");
// console.log(mongoose);
// app.use("/routes",routes);

app.use("/order",orderroute);
app.use('/fetchOrders',getOrder);
