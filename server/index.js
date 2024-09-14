import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './connection.js';
import userRouter from './routes/user.js';
dotenv.config().parsed;

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});