import express from 'express';
import "express-async-errors";

import 'reflect-metadata';
import 'dotenv/config'
import cors from 'cors';

import { createConnection } from 'typeorm';
import { pagination } from "typeorm-pagination";

import router from "@shared/Routes";

const port = process.env.API_PORT || 4001;
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

createConnection().then(() => console.debug("[DATABASE] - ", "✅ Database was Connected successful"));
app.use(pagination);
app.use(router);

app.listen(port, () => {
  console.debug("[SERVER] - ", `🚀 Server started on port ${port}`);
})
