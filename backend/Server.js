const express = require('express')
const app = express();
const port = 1998;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRouter = require('./router/apiRouter');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", apiRouter);

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/CodeForKid',{ useNewUrlParser: true } , ()=>{
    console.log("Conected database! ");
});
app.listen(port,()=>{
    console.log(`Listerning on port ${port}! `);
})