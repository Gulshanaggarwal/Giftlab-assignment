const express = require('express');
const cors = require('cors');
const connectDB = require('./middleware/db');
const routes = require('./routes')
const app = express();
const PORT = 5000;


app.use(cors());
app.use(connectDB);
app.use('/api', routes);

app.use("*", (req, res) => {
    res.status(404).json({ message: "404 not found!" });
});

app.listen(PORT, () => console.log('server is running'));

