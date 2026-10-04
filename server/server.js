
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mount API routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Merry Time Africa Safaris & Expeditions API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});