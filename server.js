const express = require('express');
const cors = require('cors');
const mongoose= require('mongoose');

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

const url="mongodb+srv://nkr:sudhankr@todojs.avhq4bp.mongodb.net/api?retryWrites=true&w=majority";
mongoose.connect(url);

const connection=mongoose.connection;

connection.once('open', () => {
    console.log("Mongo Db connection sucessfully");
})

//schema
const schema= new mongoose.Schema({
    name:String
})

const modal = mongoose.model('quotes',schema);

app.get('/', async(req,res)=>{
    modal.find({}).then(data => res.json(data));
})


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})