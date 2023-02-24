const express =  require('express')
const cors =  require('cors')
const mongoose =  require('mongoose')

const app = express()

const port = process.env.PORT || 4000;

//mongodb

const uri= "mongodb+srv://nkr:sudhankr@todojs.avhq4bp.mongodb.net/api?retryWrites=true&w=majority"
mongoose.connect(uri)
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("Connection with MongoDB is sucessful")
})
// data fetch

const schema = new mongoose.Schema({
    quotes:String,
    author:String,
    "category":String
})

const modal = new mongoose.model('quotes',schema);


app.get('/',(req,res)=>{

    modal.find({}).then(data=>res.json(data));
})


app.get('/:category',(req,res)=>{
    modal.find({"category": req.params.category}).then(data=>res.json(data));
})






app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})