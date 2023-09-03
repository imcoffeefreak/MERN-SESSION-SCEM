const express = require("express");
require("./config");
const app = express();

app.use(express.json());

const userRouter = require("./routers/user.router");

app.use("/api/users", userRouter);


app.listen(8080, ()=>{
    console.log("Listening to the port : 8080");
});