const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ugc3m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true
})
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));


app.get('/', (req, res) => {
    res.send('this is a blog-site')
})

app.listen(port, () => {
    console.log(`Listening at ${port}`)
})