require("dotenv").config();
const express = require("express");
const db = require("./db/conn");
const app = express();
// console.log(process.env);

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/quotes", (req, res) => {
    // let id = req.params.id;

    db
        .query("SELECT * FROM quotes;")
        .then((result) => {
            if(result.rows.length === 0) return res.sendStatus(404);
            else return res.status(200).send(result.rows);
        })
        .catch((err) => res.sendStatus(500));
});

app.listen(process.env.PORT, () => console.log(`Listening on PORT: ${process.env.PORT}`));
