const mongoose = require('mongoose');
require('dotenv/config')


const connectDB = async (req, res, next) => {

    try {
        await mongoose
            .connect(`${process.env.DB_URL}`, {
                useNewURLParser: true,
                useUnifiedTopology: true,
            })
        console.log('db connected successfully');
        next();
    } catch (error) {
        res.status(500).json({ error: true, message: 'DB connection error' })
    }

};

module.exports = connectDB;