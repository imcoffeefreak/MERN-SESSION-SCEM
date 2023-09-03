const express = require("express");
require("./config");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const userRouter = require("./routers/user.router");
const recipeRouter = require("./routers/receipe.router");


app.use("/api/users", userRouter);
app.use("/api/recipes", recipeRouter);

app.listen(8080, ()=>{
    console.log("Listening to the port : 8080");
});