import express, { Request, Response } from 'express';
const app = express();
const PORT: number = 4000;

import { UserRoutes } from './Routes/user'

app.use(UserRoutes)

app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`)});