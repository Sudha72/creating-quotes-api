const express= require('express')
const cors = require('cors')
const mongoose= require('mongoose')
const app = express();
const port = process.env.PORT || 4000 ;

app.use(cors())
app.use(express.json())

//connection with mongodb
const url="mongodb+srv://nkr:sudhankr@todojs.avhq4bp.mongodb.net/api?retryWrites=true&w=majority";
mongoose.connect(url)
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Sucessfully connected with MongoDB");
})
//schema

const schema = new mongoose.Schema({
    quotes:String,
    author:String,
    category:String
})

const quotes = mongoose.model('quotes',schema);


app.get('/',(req,res)=>{
    quotes.find().then(data=>res.json(data));
})

app.get('/:category',(req,res)=>{
    quotes.find({"category":req.params.category}).then(data=>res.json(data));
})
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})

