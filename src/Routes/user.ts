import express from 'express'
import { userControl } from "../Controls/user";

export const UserRoutes = express.Router();


UserRoutes.get('/', userControl.fetchAllUser);
UserRoutes.get('/customUser', userControl.fetchCustomUsers);