const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware is here
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Car Doctor Server Site')
})

app.listen(port, () => {
    console.log(`Car Doctor server site is running on PORT: ${port}`);
})
