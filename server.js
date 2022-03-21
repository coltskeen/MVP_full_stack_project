require("dotenv").config();
const express = require("express");
const db = require("./db/conn");
const app = express();
// console.log(process.env);

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


//POST REQUEST - CREATE
app.post('/quotes', (req, res) => {
    let { author, source, quote } = req.body;
    
    db
        .query("INSERT INTO pets(author, source, quote) VALUES($1, $2, $3) RETURNING *;", [
            author, 
            source, 
            quote,
        ])
        .then((result) => res.status(201).send(result.rows[0]))
        .catch((err) => res.sendStatus(500));
});


//GET REQUEST  - READ
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

//PATCH REQUEST AT INDEX - UPDATE
app.patch('/quotes/:id', (req, res) => {
    let id = req.params.id;
    let { author, source, quote } = req.body;

    let query = `
    UPDATE quotes SET
        author = COALESCE($1, author),
        source = COALESCE($2, source),
        quote = COALESCE($3, quote)
    WHERE id = $4 RETURNING *;`
    ;

    db
        .query(query, [author, source, quote, id])
        .then((result) => {
            if (result.rows.length === 0) return res.status(404).send("Not Found");
            else return res.status(201).send(result.rows[0]);
        })
        .catch((err) => res.sendStatus(500));
});

//DELETE REQUEST
app.delete("/quotes/:id", (req, res) => {
    let id = req.params.id;
    
    db
        .query("DELETE FROM quotes WHERE id=$1;", [id])
        .then((result) => {
            if(result.rowCount === 0) return res.status(404).send("Not Found");
            else return res.sendStatus(204);
        })
        .catch((err) => res.sendStatus(500));
});

//CATCH-ALL ERROR HANDLING
app.use((req, res, next) => {
    res.status(404).send("Not Found");
})

app.listen(process.env.PORT, () => console.log(`Listening on PORT: ${process.env.PORT}`));
