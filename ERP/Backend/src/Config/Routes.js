import express from 'express';

export const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json("tested2");
});