const express = require('express');
const mongoose = require('mongoose' );
const app = express();
app.listen(3000, () => {
 console.log(`Server Started at ${ 3000}`)
})
mongoose.connect('mongodb://localhost:27017/apiMongoose' );
// 'mongodb+srv://lama1:lama1Atlas@cluster0.tyhkunk.mongodb.net//apiMongoose'
const database = mongoose.connection ;
const routes = require('./routes/routes');
app.use('/api', routes)
