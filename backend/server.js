const express = require('express');
const connectDB = require("./config/db");
const app = express()

require('dotenv').config()

const userRoutes = require("./routes/userRoutes");

app.use(express.json())    // <==== parse request body as JSON

connectDB();   //connect to Database

app.get('/', (req, res) => {
    res.send('Api is Running...')
})

app.use("/api/user", userRoutes);

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})