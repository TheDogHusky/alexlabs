const express = require('express');
const { Logger } = require('simply-logger');
const app = express();
const datas = require('./datas.js');

const logger = new Logger("AlexLabs", "Europe/Paris", 24);
// initialize the app
app.listen(3001, () => {
    logger.info("Server started on port 3001");
});

app.use("/public", express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    const page = req.query.page;
    res.render("index.ejs", {
        page,
    });
});
app.get("/about", (req, res) => {
    const email = datas.other.email;
    res.render("about.ejs", {
        page: 'about',
        email: email,
    });
});