const express = require('express');
const app = express();

const cors = require('cors');
const PORT = 8080;
const connectDB = require('./config');
const authRoutes=require("./routes/authRoutes")
const {authorize}=require("./middleware/authMiddleware")
require('dotenv').config(); 

//
app.use(express.json());
app.use(cors());
//
app.use("/api",authorize,authRoutes)


app.get("/", (req, res) => {
    res.json({ message: "hello" });
});


connectDB();

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT);
});
