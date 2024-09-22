import express from 'express';

import connectDb from './src/DB/index.js';


const app = express();

connectDb();



