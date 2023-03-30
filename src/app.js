const express = require('express');
require("../src/db/conn");
const router = require('../src/routers/men');
const MensRanking = require("../src/models/mens");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});