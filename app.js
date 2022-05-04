const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const dotenv = require("dotenv");

const feedRoute = require("./routes/feed");

dotenv.config();

app.use(bodyParser.json());

app.use("/feed", feedRoute);

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}`))