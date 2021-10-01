const express = require('express');
const Connect = require('./db/db');
const cors = require('cors');
const router = require('./routes/routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', router);

const port = 8000;

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})

Connect();