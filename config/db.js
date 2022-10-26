require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 
    // mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true});
    // const connection = mongoose.connection;
    // connection.once('open', () => {
    //     console.log('Database connected');
    // }).catch(err => {
    //     console.log('Connection failed');
    // })


    // const URI = process.env.MONGODB_URL;

    // mongoose.connect(process.env.MONGO_CONNECTION_URL, {

    //     useNewUrlParser: true,

    //     useUnifiedTopology: true

    // }, err => {
    //     if (err) throw err;
    //     console.log('Connected to MongoDB!!!')
    // });


    mongoose
  .connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));
}



module.exports = connectDB;