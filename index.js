const express = require("express");
const CategoryRoute = require("./routes/categoryR");
const mongoose = require("mongoose");

mongoose.
    connect("mongodb+srv://asillistmamadiyev:Z3tHfMFL5x0yxVmz@cluster0.4brfdzb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=> console.log("connected to db"))
    .catch((e)=> console.log(e));

    const app = express();
    app.use = express();

    app.use("/categoryR", CategoryRoute);

    app.listen(3000, () => console.log("server started on port 3000"));