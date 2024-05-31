import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js';

import cookieParser from 'cookie-parser';

import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://fazt-crud.matthewrivero.com'
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api', authRoutes);
app.use('/api', taskRoutes);
app.use(express.static(path.join(__dirname, 'dist')));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });

export default app;