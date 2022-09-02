require("dotenv").config();
const express = require("express");

const cors = require("cors")

const connection = require("./config/db")
const userRouter = require("./routes/user");
const doctorRouter = require("./routes/doctors");
const patientRouter = require("./routes/patient")

const app = express();

app.use(cors({
    origin: ["http://localhost:3000"]
}))

app.use(express.json());
app.use(cors())

app.use("/user", userRouter);

app.use("/doctors", doctorRouter);

app.use("/patient", patientRouter)

app.listen(process.env.PORT, async ()  => {
    try {
        await connection;
        console.log("connected to DB")
    } catch (error) {
        console.log("Something went wrong")
    }
    console.log(`listening at ${process.env.PORT}`)
})