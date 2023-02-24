const express = require('express')
const cors = require('cors')
const mongoose= require('mongoose')

const app = express()
const port = process.env.PORT || 4000;
app.use(cors())
app.use(express.json())

//Mongo
const uri = "mongodb+srv://nkr:sudhankr@todojs.avhq4bp.mongodb.net/api?retryWrites=true&w=majority";
mongoose.connect(uri)

const connection= mongoose.connection;

connection.once('open',()=>{
    console.log("Sucesfully Connect with Mongo");
})
//schema

const schema = new mongoose.Schema({
    quote:String,
    author:String,
    category:String
})

const modal = new mongoose.model('quotes',schema)

app.get('/',(req, res)=>{
    modal.find().then(data=>res.json(data));
})


app.get('/:cat',(req,res)=>{
    console.log(req.params.cat);
    modal.find({"category":req.params.cat}).then(data=>res.json(data));
})




//app listen
app.listen(port,()=>{
    console.log(`Server is started on ${port}`);
})
