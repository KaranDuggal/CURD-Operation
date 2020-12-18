require('dotenv').config()
const path= require('path')
const ejsLayout = require('express-ejs-layouts')
const express = require('express')
const app = express();

// database
require('./db/config')

// paths
const routesFiles = path.join(__dirname,'../routes/web')
// console.log(routesFiles);

app.set('view engine','ejs')
app.use(ejsLayout)
app.use(express.json())
app.use(express.urlencoded({extended:false})); 

// routes
require(routesFiles)(app)



const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`server run on port number ${PORT}`);
})