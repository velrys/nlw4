import 'reflect-metadata';
import createConnection from'./Database';
import express from 'express';
import { router } from './router';

createConnection()

const app = express();
app.use(express.json())
app.use(router)

export {app}