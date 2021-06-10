const express = require("express");
const app = express();
const connectDb = require('./models/conn');
const Port = process.env.Port || 2000;

connectDb();
app.use(express.json({extended: false}));
app.use('/api/company', require('./routes/company'));


app.listen(Port, () => console.log("server started"));