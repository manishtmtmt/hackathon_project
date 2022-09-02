require("dotenv").config();
const express = require("express");
let cors = require('cors')

const connection = require("./config/db")
const userRouter = require("./routes/user");

const app = express();

app.use(express.json());
app.use(cors())

app.use("/user", userRouter);


app.listen(process.env.PORT, async ()  => {
    try {
        await connection;
        console.log("connected to DB")
    } catch (error) {
        console.log("Something went wrong")
    }
    console.log(`listening at ${process.env.PORT}`)
})