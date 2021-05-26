// http://127.0.0.1:4000/

//server.js
import express, { request, response } from "express";

const app = express();

import productRoutes from './routes/products.routes.js';
import customerRoutes from './routes/customer.routes.js';

//app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (request, response) => response.json({ status: 'alive'}))

app.use(productRoutes);
app.use(customerRoutes);

//7. Start server on port 4000
app.listen(4000, () => console.log('Server is started'));


