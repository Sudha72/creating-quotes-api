const express =  require('express')
const cors =  require('cors')
const mongoose =  require('mongoose')

const app = express() //istance of express

const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

//connection

const url="mongodb+srv://nkr:sudhankr@todojs.avhq4bp.mongodb.net/api?retryWrites=true&w=majority";

mongoose.connect(url);
const connection=mongoose.connection;

connection.once('open',()=>{
    console.log("Sucessfully able to connect with MongoDB");
})


const schema = new mongoose.Schema({
    quotes:String,
    author:String,
    category:String
})

const modal = new mongoose.model('quotes',schema);

app.get('/',(req,res)=>{
    modal.find({}).then(data=>res.json(data));
})

app.get('/:category',(req,res)=>{
    modal.find({"category":req.params.category}).then(data=>res.json(data));
})

app.listen(port, ()=>{
    console.log(`Server is started on ${port}`)
})