const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use((req, res, next) => {
    res.set('Cross-Origin-Opener-Policy', 'same-origin');
    next();
  });

app.get("/",(req,res)=>{
    res.send("Hello World")
});

app.post("/pay", async(req,res)=>{
    await Stripe.charges.create({
        source:req.body.token.id,
        amount : req.body.amount,
        currency: "usd", 
    });
})




app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});