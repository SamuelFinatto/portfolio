import express, { response } from "express";


const app = express();

app.get('/', (_req, res) => {
    res.send("Hello From Samuel!!");
});


const port= process.env.PORT || 3000;


app.listen(port, () => console.log("API listening on port "+port));