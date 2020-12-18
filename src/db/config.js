const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_KEY, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('database connected...');
}).catch(err => {
    console.log('connection Failed...');
});