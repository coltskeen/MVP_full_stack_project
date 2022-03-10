const express = require("express");
const { Pool } = require("pg");

const PORT = 3000;
const app = express();
const pool = new Pool({
    database:"LOTR_quotes",
});

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// TEST CONNECTION TO DATABASE
// pool.query('SELECT * FROM quotes', (err, result) => {
//     console.log(result.rows); 
// });

app.get("/quotes/:id", (req, res) => {
    let id = req.params.id;

    pool
        .query("SELECT * FROM quotes WHERE id=$1", [id])
        .then((result) => {
            if(result.rows.length === 0) return res.sendStatus(404);
            else return res.status(200).send(result.rows[0]);
        })
        .catch((err) => res.sendStatus(500));
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));