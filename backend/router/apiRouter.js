const express = require('express');
const apiRouter = express.Router();
const studentRouter = require("./studentRouter");

apiRouter.use("/", (req, res, next) => {
   next();
});

apiRouter.get("/", (req, res) => {
    res.send("Hello World");
});

apiRouter.use("/students",studentRouter);

module.exports = apiRouter;