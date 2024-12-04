const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRoute = require('./routes/product.route')
//const Product = require('./models/product.model');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use('/api/products', productRoute);


mongoose.connect("mongodb+srv://godwin:admin@backenddb.reu3syr.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
  console.log("Connected to database")
})
.catch(() => {
  console.log("Connection Failed")
});

app.listen(4000, () => {
  console.log('Server is running on port 4000 ...')
});